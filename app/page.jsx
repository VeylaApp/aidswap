"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

// Edit your copy here
const mission = `Our mission is to nurture a welcoming online community where people come together in the spirit of mutual aid — sharing skills, services, and goods to meet each other’s needs. We believe in fostering genuine human connection, building trust, and creating space for generosity to thrive outside the constraints of traditional commerce.`;

const container = "max-w-3xl w-full mx-auto px-6";

export default function Home() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    setStatus("Thanks — you're on the list!");
    // Reset just after the POST fires
    setTimeout(() => formRef.current?.reset(), 200);
  };

  return (
    <main className={`${poppins.className} min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-emerald-100 to-amber-100`}>
      {/* Header */}
      <header className="py-8">
        <div className={container}>
          <div className="mx-auto w-2/3 max-w-[520px]">
            <Image
              src="/logo.png"
              alt="AidSwap"
              width={1200}
              height={300}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </header>

      {/* Mission */}
      <section>
        <div className={`${container} text-center`}>
          <p className="whitespace-pre-line text-lg sm:text-xl text-gray-800 leading-relaxed mb-8">
            {mission}
          </p>
        </div>
      </section>

      {/* Clean, centered form that posts to Zoho */}
      <section className="flex-1">
        <div className={container}>
          <div className="mx-auto max-w-xl rounded-2xl border border-white/60 bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8">
            {/* Hidden iframe to swallow Zoho response */}
            <iframe name="zohoTarget" className="hidden" />

            <form
              ref={formRef}
              method="POST"
              action="https://crm.zoho.com/crm/WebForm"
              target="blank"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4"
            >
              {/* Zoho required hidden fields */}
              <input type="hidden" name="xnQsjsdp" value="26b61068bd0f5968badeda662301461a189f000cc7eefc641f3e9263cb7dbf4c" />
              <input type="hidden" name="xmIwtLD" value="867f8d5c61e8c79e68d67963a5bd8cf85f6f3df7fa9be514311699693831572259215b93eac979eb391c4a052107e007" />
              <input type="hidden" name="actionType" value="Q3VzdG9tTW9kdWxlMg==" />
              <input type="hidden" name="returnURL" value="null" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />

              <h2 className="text-center text-lg font-semibold text-emerald-900">Aid Swap Contact</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="NAME" className="text-sm font-medium text-gray-700">Full Name *</label>
                  <input id="NAME" name="NAME" required className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Email" className="text-sm font-medium text-gray-700">Email *</label>
                  <input id="Email" name="Email" type="email" required className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="COBJ2CF3" className="text-sm font-medium text-gray-700">City</label>
                  <input id="COBJ2CF3" name="COBJ2CF3" className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="COBJ2CF4" className="text-sm font-medium text-gray-700">State/Province *</label>
                  <input id="COBJ2CF4" name="COBJ2CF4" required className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="COBJ2CF5" className="text-sm font-medium text-gray-700">Country *</label>
                  <input id="COBJ2CF5" name="COBJ2CF5" required className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500" />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label htmlFor="COBJ2CF6" className="text-sm font-medium text-gray-700">Skills &amp; Goods you would like to offer</label>
                  <textarea id="COBJ2CF6" name="COBJ2CF6" rows={4} className="mt-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button type="submit" className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2 transition">
                  Submit
                </button>
                <button type="reset" className="rounded-full border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50">
                  Reset
                </button>
              </div>

              {status && (
                <div className="text-center text-emerald-800 text-sm mt-1">
                  {status}
                </div>
              )}
            </form>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Private beta invites will go to subscribers first.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-emerald-900/10 bg-white/70 backdrop-blur-sm">
        <div className={`${container} py-5 text-center text-sm text-emerald-900`}>
          A{" "}
          <a href="https://secondbloomsolutions.com" className="underline decoration-emerald-700 hover:decoration-amber-500">
            Second Bloom Solutions
          </a>{" "}
          Project — © {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}
