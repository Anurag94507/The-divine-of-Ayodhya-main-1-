import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { HandHeart } from 'lucide-react';
import { useToast } from '../hooks/use-toast'; // Assuming you have a toast hook

// Declare Razorpay type globally or import if you have types installed
declare global {
  interface Window {
    Razorpay: any; // Use 'any' for simplicity, or install @types/razorpay
  }
}

const NGO_NAME = "Ayodhya Blessings Temple Trust";
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_live_RgUpx3CB4OtecR";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

const DonationSection: React.FC<{}> = () => { // Added curly braces here
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast(); // Use toast for feedback

  const handleDonateClick = async () => {
    setLoading(true);
    const donationAmount = parseInt(amount) * 100; // Amount in paise/cents

    if (isNaN(donationAmount) || donationAmount <= 0) {
      toast({ title: "Error", description: "Please enter a valid donation amount.", variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      // 1. Call backend to create an order
      console.log(`[Frontend] Creating order with amount: ${donationAmount} paise`);
      const orderResponse = await fetch(`${BACKEND_URL}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: donationAmount }),
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.text();
        console.error("[Frontend] Error creating order:", errorData);
        toast({ 
          title: "Error", 
          description: "Failed to create donation order. Please try again.", 
          variant: "destructive" 
        });
        setLoading(false);
        return;
      }

      const orderData = await orderResponse.json();
      console.log("[Frontend] Received order data:", orderData);

      // Ensure orderData contains the expected fields
      if (!orderData.order_id || !orderData.amount) {
        console.error("[Frontend] Invalid order data:", orderData);
        throw new Error('Backend did not return expected order data.');
      }

      // 2. Configure Razorpay Checkout for REAL PAYMENTS
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: "Ayodhya Blessings",
        description: `Donation to ${NGO_NAME}`,
        image: "/assets/images/ayodhya-logo.png",
        order_id: orderData.order_id,
        handler: async (response: any) => {
          // 3. Payment Success: Verify payment on backend
          try {
            console.log(`[Frontend] Payment completed! Response:`, response);
            const verificationResponse = await fetch(`${BACKEND_URL}/api/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (!verificationResponse.ok) {
              const errorData = await verificationResponse.text();
              console.error("[Frontend] Error verifying payment:", errorData);
              throw new Error('Payment verification failed.');
            }

            const verificationData = await verificationResponse.json();
            console.log("[Frontend] Verification response:", verificationData);

            if (verificationData.status === 'success') {
              toast({ 
                title: "Success! 🎉", 
                description: "Your donation has been received successfully. Thank you for your support!", 
                variant: "default" 
              });
              setAmount(''); // Clear amount field
            } else {
              throw new Error('Payment verification failed.');
            }

          } catch (verifyError: any) {
            console.error("[Frontend] Verification error:", verifyError);
            toast({ 
              title: "Verification Failed", 
              description: verifyError.message || 'Could not verify payment.', 
              variant: "destructive" 
            });
          }
        },
        prefill: {},
        notes: {
          address: "Ayodhya Donation",
        },
        theme: {
          color: "#FF9933",
        },
      };

      // 4. Open Razorpay Checkout Modal
      console.log("[Frontend] Opening Razorpay Checkout Modal...");
      console.log("[Frontend] Razorpay object:", window.Razorpay);
      
      if (!window.Razorpay) {
        throw new Error('Razorpay script not loaded. Please refresh the page.');
      }
      
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response: any) => {
        console.error("[Frontend] Payment Failed Callback:", response.error);
        toast({ 
          title: "Payment Failed", 
          description: response.error?.description || 'An error occurred during payment. This is a test payment, so no real transaction was made.', 
          variant: "destructive" 
        });
        setLoading(false);
      });
      rzp.open();

    } catch (error: any) {
      console.error("[Frontend] Donation error:", error);
      toast({ title: "Error", description: error.message || 'Could not initiate donation.', variant: "destructive" });
    }

    setLoading(false);
  };

  return (
    <section className="py-16 bg-ayodhya-cream section-animate">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-ayodhya-orange shadow-lg">
          <CardHeader className="text-center">
            <HandHeart className="w-12 h-12 mx-auto text-ayodhya-saffron mb-3" />
            <CardTitle className="text-2xl font-bold text-ayodhya-maroon">Support Ayodhya's Community</CardTitle>
            <CardDescription>
              Your contribution helps support local initiatives through {NGO_NAME}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => {e.preventDefault(); handleDonateClick();}}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="donation-amount" className="text-ayodhya-maroon">Donation Amount (INR)</Label>
                  <Input
                    id="donation-amount"
                    type="number"
                    placeholder="Enter amount (e.g., 501)"
                    className="border-ayodhya-maroon focus:ring-ayodhya-saffron"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              size="lg"
              className="bg-ayodhya-saffron text-white hover:bg-ayodhya-saffron/90 text-lg px-8 py-3 w-full sm:w-auto disabled:opacity-50"
              onClick={handleDonateClick}
              disabled={loading || !amount}
            >
              {loading ? 'Processing...' : 'Donate Now'}
            </Button>
          </CardFooter>
        </Card>
        <p className="text-center text-sm text-gray-600 mt-4">
          Secure payment powered by Razorpay. Your donation supports Ayodhya's community.
        </p>
      </div>
    </section>
  );
};

export default DonationSection;