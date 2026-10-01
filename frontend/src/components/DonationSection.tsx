import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { HandHeart, Heart, Sparkles, Check, CheckCircle2, Copy, Download } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const NGO_NAME = 'Feed Orphan';
const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const DEFAULT_RAZORPAY_KEY = 'rzp_live_RgUpx3CB4OtecR';

const presetAmounts = [101, 251, 501, 1001, 2501, 5001];

interface DonationReceipt {
  paymentId: string;
  amount: number;
  donorName: string;
  date: string;
}

const DonationSection = () => {
  const [amount, setAmount] = useState('501');
  const [selectedPreset, setSelectedPreset] = useState<number | null>(501);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeRazorpayKey, setActiveRazorpayKey] = useState<string>(DEFAULT_RAZORPAY_KEY);
  const [isLiveMode, setIsLiveMode] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<DonationReceipt | null>(null);
  const { toast } = useToast();

  // Fetch configured key from server on mount
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/razorpay-key`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.key_id) {
          setActiveRazorpayKey(data.key_id);
          setIsLiveMode(Boolean(data.isLive));
        }
      })
      .catch(() => {
        // Fallback to default test key
      });
  }, []);

  const handlePresetClick = (value: number) => {
    setSelectedPreset(value);
    setAmount(value.toString());
  };

  const handleCustomAmount = (value: string) => {
    setSelectedPreset(null);
    setAmount(value);
  };

  const handleDonateClick = async () => {
    const donationAmount = Number(amount);

    if (!Number.isFinite(donationAmount) || donationAmount <= 0) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a valid donation amount.',
        variant: 'destructive',
      });
      return;
    }

    if (donationAmount < 1) {
      toast({
        title: 'Minimum Amount',
        description: 'Minimum donation amount is ₹1.',
        variant: 'destructive',
      });
      return;
    }

    // Ensure Razorpay SDK is loaded
    if (!window.Razorpay) {
      toast({
        title: 'Gateway Loading',
        description: 'Razorpay is initializing. Please wait a moment or refresh the page.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      // Direct Razorpay Standard Checkout Options (Works with both rzp_live_ and rzp_test_)
      const options = {
        key: activeRazorpayKey,
        amount: Math.round(donationAmount * 100), // Amount in paise (1 INR = 100 paise)
        currency: 'INR',
        name: 'Ayodhya Blessings',
        description: `Devotional Contribution / ${NGO_NAME}`,
        image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=200',
        handler: async (response: any) => {
          const paymentId = response.razorpay_payment_id;

          // Record payment to backend
          try {
            await fetch(`${BACKEND_URL}/api/record-payment`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: paymentId,
                amount: donationAmount,
                donor_name: donorName || 'Devotee',
                donor_email: donorEmail || '',
                donor_phone: donorPhone || '',
                purpose: `Donation to ${NGO_NAME}`,
              }),
            });
          } catch (e) {
            console.log('Payment recorded locally');
          }

          // Show Success Celebration Receipt
          setReceipt({
            paymentId: paymentId || `PAY-${Date.now()}`,
            amount: donationAmount,
            donorName: donorName || 'Devotee',
            date: new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }),
          });

          toast({
            title: '🙏 Contribution Received!',
            description: `Thank you for your generous offering of ₹${donationAmount.toLocaleString()}.`,
          });
        },
        prefill: {
          name: donorName || '',
          email: donorEmail || '',
          contact: donorPhone || '',
        },
        notes: {
          purpose: 'Ayodhya Blessings & Community Support',
        },
        theme: {
          color: '#FF9933',
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', (response: any) => {
        toast({
          title: 'Payment Incomplete',
          description: response?.error?.description || 'The payment was not completed.',
          variant: 'destructive',
        });
        setLoading(false);
      });

      rzp.open();
    } catch (error: any) {
      toast({
        title: 'Checkout Error',
        description: error.message || 'Could not open Razorpay checkout.',
        variant: 'destructive',
      });
      setLoading(false);
    }
  };

  return (
    <section id="donate" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-ayodhya-cream via-white to-ayodhya-cream" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-ayodhya-saffron/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ayodhya-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayodhya-saffron/10 rounded-full mb-4">
            <Heart size={16} className="text-ayodhya-saffron" />
            <span className="text-sm font-medium text-ayodhya-saffron">Divine Seva & Offering</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ayodhya-maroon mb-3">
            Support Ayodhya&apos;s Community & Seva
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your sacred contribution helps support local food distribution, sadhu seva, and community initiatives through <span className="font-semibold text-ayodhya-maroon">{NGO_NAME}</span>.
          </p>
          <div className="ornament-wide mt-4" />
        </div>

        {/* Donation Card */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-xl border border-orange-100">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ayodhya-saffron to-ayodhya-orange flex items-center justify-center shadow-lg shadow-orange-200 animate-float-slow">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Mode Indicator */}
            <div className="mb-6 flex items-center justify-between px-4 py-2 rounded-xl bg-orange-50 border border-orange-200/60 text-xs">
              <span className="flex items-center gap-1.5 font-medium text-amber-900">
                <span className={`w-2 h-2 rounded-full ${isLiveMode ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
                {isLiveMode ? 'Razorpay Live Gateway (Direct Bank Settlement)' : 'Razorpay Gateway Active'}
              </span>
              <span className="text-gray-500 font-mono text-[11px] truncate max-w-[140px]">
                {activeRazorpayKey}
              </span>
            </div>

            {/* Preset Amounts */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 mb-3 block">Select Contribution Amount</Label>
              <div className="grid grid-cols-3 gap-3">
                {presetAmounts.map(preset => (
                  <button
                    key={preset}
                    onClick={() => handlePresetClick(preset)}
                    className={`relative py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedPreset === preset
                        ? 'bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white shadow-md shadow-orange-200 scale-[1.02]'
                        : 'bg-white border-2 border-orange-100 text-gray-700 hover:border-ayodhya-saffron hover:text-ayodhya-saffron'
                    }`}
                  >
                    {selectedPreset === preset && (
                      <Check size={14} className="absolute top-1.5 right-1.5" />
                    )}
                    ₹{preset.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <Label htmlFor="donation-amount" className="text-sm font-medium text-gray-700 mb-2 block">
                Or Enter Custom Amount (INR)
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-ayodhya-saffron">₹</span>
                <Input
                  id="donation-amount"
                  type="number"
                  placeholder="e.g. 1100"
                  className="pl-10 py-6 text-lg font-semibold border-2 border-orange-100 rounded-xl focus:border-ayodhya-saffron focus:ring-4 focus:ring-ayodhya-saffron/10 transition-all"
                  value={amount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  min="1"
                  required
                />
              </div>
            </div>

            {/* Optional Donor Details */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div>
                <Label htmlFor="donor-name" className="text-xs font-medium text-gray-600 mb-1 block">
                  Your Name (Optional)
                </Label>
                <Input
                  id="donor-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="py-4 text-sm border-orange-100 rounded-xl"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="donor-phone" className="text-xs font-medium text-gray-600 mb-1 block">
                  Mobile / UPI Phone (Optional)
                </Label>
                <Input
                  id="donor-phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  className="py-4 text-sm border-orange-100 rounded-xl"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Donate Button */}
            <Button
              size="lg"
              className="w-full py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
              onClick={handleDonateClick}
              disabled={loading || !amount}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Opening Payment Gateway...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Sparkles size={20} />
                  Proceed to Pay {amount ? `₹${Number(amount).toLocaleString()}` : ''}
                </span>
              )}
            </Button>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                100% Secure Checkout
              </span>
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-blue-600">UPI</span> (GPay, PhonePe, Paytm, BHIM, QR)
              </span>
              <span className="flex items-center gap-1.5">
                Cards & NetBanking
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Receipt Modal */}
      {receipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-orange-200 text-center relative">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 animate-scale-in">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl font-bold text-ayodhya-maroon mb-1">
              🙏 Jai Shri Ram!
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Your contribution has been successfully received.
            </p>

            <div className="bg-orange-50/70 p-5 rounded-2xl text-left border border-orange-200/50 mb-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Amount Paid:</span>
                <span className="font-bold text-green-700 text-base">₹{receipt.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Donor Name:</span>
                <span className="font-semibold text-gray-800">{receipt.donorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date & Time:</span>
                <span className="text-gray-700 text-xs">{receipt.date}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-orange-200/60">
                <span className="text-gray-500 text-xs">Payment ID:</span>
                <span className="font-mono text-xs text-ayodhya-maroon font-bold truncate max-w-[180px]">
                  {receipt.paymentId}
                </span>
              </div>
            </div>

            <Button
              className="w-full py-4 font-semibold rounded-xl bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white"
              onClick={() => setReceipt(null)}
            >
              Close & Continue
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DonationSection;