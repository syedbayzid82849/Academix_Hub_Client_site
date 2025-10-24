import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function PaymentSuccess() {
    const [params] = useSearchParams();
    const sessionId = params.get("session_id");

    useEffect(() => {
        if (sessionId) {
            toast.success("🎉 Payment successful!");
            // এখানে তুমি চাইলে backend এ PATCH রিকোয়েস্ট পাঠিয়ে user membership আপডেট করতে পারো
            // যেমন: await fetch(`/api/update-membership?sessionId=${sessionId}&email=${user.email}`)
        }
    }, [sessionId]);

    return (
        <div className="h-screen flex items-center justify-center flex-col gap-4">
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p>Thank you for upgrading your membership.</p>
        </div>
    );
}
