// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
// import { Input } from './ui/input';
// import { Label } from './ui/label';
// import { HandHeart } from 'lucide-react';
// import { useToast } from '../hooks/use-toast'; // Assuming you have a toast hook

// // Declare Razorpay type globally or import if you have types installed
// declare global {
//   interface Window {
//     Razorpay: any; // Use 'any' for simplicity, or install @types/razorpay
//   }
// }

// const NGO_NAME = "[feed orphan]"; // <-- REPLACE THIS
// const RAZORPAY_KEY_ID = "rzp_test_sS4pKgwR9F3SU7"; // Your actual TEST key ID
// const BACKEND_URL = "http://localhost:3001"; // Mock backend URL

// const DonationSection: React.FC<{}> = () => { // Added curly braces here
//   const [amount, setAmount] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const { toast } = useToast(); // Use toast for feedback

//   const handleDonateClick = async () => {
//     setLoading(true);
//     const donationAmount = parseInt(amount) * 100; // Amount in paise/cents

//     if (isNaN(donationAmount) || donationAmount <= 0) {
//       toast({ title: "Error", description: "Please enter a valid donation amount.", variant: "destructive" });
//       setLoading(false);
//       return;
//     }

//     try {
//       // 1. Call your MOCK backend to create an order
//       console.log(`[Frontend] Calling MOCK backend at ${BACKEND_URL}/api/create-order`);
//       const orderResponse = await fetch(`${BACKEND_URL}/api/create-order`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount: donationAmount }),
//       });

//       if (!orderResponse.ok) {
//         const errorData = await orderResponse.text(); // Get potential error text
//         console.error("[Frontend] Error creating mock order:", errorData);
//         throw new Error('Failed to create mock donation order.');
//       }

//       const orderData = await orderResponse.json();
//       console.log("[Frontend] Received mock order data:", orderData);

//       // Ensure orderData contains the expected fields
//       if (!orderData.order_id || !orderData.amount) {
//         throw new Error('Mock backend did not return expected order data.');
//       }

//       // 2. Configure Razorpay Checkout
//       const options = {
//         key: RAZORPAY_KEY_ID, // Use the provided Test Key ID
//         amount: orderData.amount,
//         currency: orderData.currency || 'INR',
//         name: "Ayodhya Blossom Experience",
//         description: `Donation to ${NGO_NAME}`,
//         image: "/assets/images/ayodhya-logo.png",
//         order_id: orderData.order_id, // Use the MOCK Order ID from backend
//         handler: async (response: any) => {
//           // 3. Payment Success: Verify payment on MOCK backend
//           try {
//             console.log(`[Frontend] Calling MOCK backend at ${BACKEND_URL}/api/verify-payment`);
//             const verificationResponse = await fetch(`${BACKEND_URL}/api/verify-payment`, { // Corrected typo: 'verify-payment'
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature,
//               }),
//             });

//             if (!verificationResponse.ok) {
//               const errorData = await verificationResponse.text();
//               console.error("[Frontend] Error verifying mock payment:", errorData);
//               throw new Error('Mock payment verification failed.');
//             }

//             const verificationData = await verificationResponse.json();
//             console.log("[Frontend] Received mock verification data:", verificationData);

//             if (verificationData.status === 'success') {
//               toast({ title: "Success (Mock)", description: "Mock donation successful! Thank you!" });
//               setAmount(''); // Clear amount field
//             } else {
//               throw new Error('Mock payment verification failed.');
//             }

//           } catch (verifyError: any) {
//             console.error("[Frontend] Mock verification error:", verifyError);
//             toast({ title: "Verification Failed (Mock)", description: verifyError.message || 'Could not verify mock payment.', variant: "destructive" });
//           }
//         },
//         prefill: {},
//         notes: {
//           address: "Ayodhya Donation",
//         },
//         theme: {
//           color: "#FF9933",
//         },
//       };

//       // 4. Open Razorpay Checkout Modal
//       console.log("[Frontend] Opening Razorpay Checkout Modal...");
//       const rzp = new window.Razorpay(options);
//       rzp.on('payment.failed', (response: any) => {
//         console.error("[Frontend] Payment Failed Callback:", response.error);
//         toast({ title: "Payment Failed (Mock)", description: response.error.description || 'An error occurred during mock payment.', variant: "destructive" });
//       });
//       rzp.open();

//     } catch (error: any) {
//       console.error("[Frontend] Donation error:", error);
//       toast({ title: "Error (Mock Setup)", description: error.message || 'Could not initiate mock donation.', variant: "destructive" });
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="py-16 bg-ayodhya-cream section-animate">
//       <div className="container mx-auto px-4">
//         <Card className="max-w-2xl mx-auto border-ayodhya-orange shadow-lg">
//           <CardHeader className="text-center">
//             <HandHeart className="w-12 h-12 mx-auto text-ayodhya-saffron mb-3" />
//             <CardTitle className="text-2xl font-bold text-ayodhya-maroon">Support Ayodhya's Community</CardTitle>
//             <CardDescription>
//               Your contribution helps support local initiatives through {NGO_NAME}.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={(e) => {e.preventDefault(); handleDonateClick();}}>
//               <div className="grid w-full items-center gap-4">
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="donation-amount" className="text-ayodhya-maroon">Donation Amount (INR)</Label>
//                   <Input
//                     id="donation-amount"
//                     type="number"
//                     placeholder="Enter amount (e.g., 501)"
//                     className="border-ayodhya-maroon focus:ring-ayodhya-saffron"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     min="1"
//                     required
//                   />
//                 </div>
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter className="flex justify-center">
//             <Button
//               size="lg"
//               className="bg-ayodhya-saffron text-white hover:bg-ayodhya-saffron/90 text-lg px-8 py-3 w-full sm:w-auto disabled:opacity-50"
//               onClick={handleDonateClick}
//               disabled={loading || !amount}
//             >
//               {loading ? 'Processing...' : 'Donate Now'}
//             </Button>
//           </CardFooter>
//         </Card>
//         <p className="text-center text-sm text-gray-600 mt-4">
//           Using MOCK backend for testing. No real payments will be processed.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default DonationSection;