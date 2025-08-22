import { FaPhoneAlt, FaFax, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { redirect } from 'next/navigation';

async function sendEmail(formData: FormData) {
    'use server';
    const name = (formData.get('name') ?? '').toString().trim();
    const email = (formData.get('email') ?? '').toString().trim();
    const message = (formData.get('message') ?? '').toString().trim();

    const to = 'info@cmr.de';
    const subject = `Kontaktformular: ${name || 'Anfrage'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect the user to the Gmail compose URL
    redirect(gmailUrl);
}

export default function Footer() {
    return (
        <div className="w-full bg-white py-14">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex justify-center lg:justify-between gap-8 px-[74px] mb-14 flex-wrap">
                    {/* Contact Section */}
                    <div className="w-[200px] flex-shrink-0 flex flex-col gap-[18px]">
                        <h3 className="text-[#B12F3F] text-2xl font-bold">KONTAKT</h3>
                        
                        {/* Phone 1 */}
                        <div className="flex items-center gap-2.5">
                            <FaPhoneAlt size={27} className="text-[#262626]" />
                            <span className="text-[#262626] text-base">06 21 - 18 16 0</span>
                        </div>

                        {/* Phone 2 */}
                        <div className="flex items-center gap-2.5">
                            <FaFax size={27} className="text-[#262626]" />
                            <span className="text-[#262626] text-base">06 21 - 18 16 111</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-2.5">
                            <FaMapMarkerAlt size={27} className="text-[#262626]" />
                            <span className="text-[#262626] text-base">Rastatter Straße 12<br />68239 Mannheim</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2.5">
                            <FaEnvelope size={27} className="text-[#262626]" />
                            <span className="text-[#262626] text-base">info@cmr.de</span>
                        </div>

                        {/* Website */}
                        <div className="flex items-center gap-2.5">
                            <FaGlobe size={27} className="text-[#262626]" />
                            <span className="text-[#262626] text-base">www.cmr.de</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-[432px] flex-shrink-0 flex flex-col gap-4">
                        <form action={sendEmail} method="post" className="flex flex-col gap-4">
                            <div className="flex items-center gap-[14px]">
                                {/* Name Field */}
                                <div className="relative">
                                    <input 
                                        name="name"
                                        type="text" 
                                        className="w-[209px] h-[44px] bg-[rgba(177,47,63,0.1)] border border-[#B12F3F] rounded-[10px] px-[13.5px] text-[#B12F3F] placeholder-[rgba(177,47,63,0.5)] text-base font-medium"
                                        placeholder="NAME"
                                    />
                                </div>
                                
                                {/* Email Field */}
                                <div className="relative">
                                    <input 
                                        name="email"
                                        type="email" 
                                        className="w-[209px] h-[44px] bg-[rgba(177,47,63,0.1)] border border-[#B12F3F] rounded-[10px] px-[13.5px] text-[#B12F3F] placeholder-[rgba(177,47,63,0.5)] text-base"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <textarea 
                                    name="message"
                                    className="w-full h-[162px] bg-[rgba(177,47,63,0.1)] border border-[#B12F3F] rounded-[10px] px-[16.67px] py-4 text-[#B12F3F] placeholder-[rgba(177,47,63,0.5)] text-base font-medium resize-none"
                                    placeholder="NACHRICHT"
                                />
                            </div>

                            {/* Send Button */}
                            <button type="submit" className="w-full py-3 px-5 text-cmr-red-400 border-cmr-red-400 border-1 rounded-[10px] text-sm hover:bg-cmr-red-400 hover:text-white transition-all duration-200">SENDEN</button>
                        </form>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-[#B12F3F] mb-7"></div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center gap-7">
                    {/* Legal Links */}
                    <div className="flex items-center gap-[46px]">
                        <a href="#" className="text-black text-base hover:text-[#B12F3F] transition-colors">Impressum</a>
                        <a href="#" className="text-black text-base hover:text-[#B12F3F] transition-colors">Datenschutzhinweise</a>
                    </div>

                    {/* Final Divider Line */}
                    <div className="w-full h-px bg-[#B12F3F]"></div>

                    {/* Copyright */}
                    <p className="text-[#262626] text-base text-center">© 2025 - C.M.R. Institut für Communication- & Marketing-Research</p>
                </div>
            </div>
        </div>
    )
}
