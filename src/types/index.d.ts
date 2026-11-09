// 1. عرّف شكل الداتا اللي هتبقى جوه اليوزر
export interface JwtPayload {
    userId: string;
    role: string;
    // تقدر تزود هنا أي بيانات تانية بتبعت التوكن شايلها (زي email مثلاً)
}

// 2. وسّع نطاق الـ Request الأصلي بتاع Express
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload; // هنا ضفنا خاصية user رسمياً لكل الـ Requests!
        }
    }
}