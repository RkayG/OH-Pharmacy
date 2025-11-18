'use client';
import Link from 'next/link';
import { Feature72 } from '@/components/ui/feature-72';
import { HeroSection } from '@/components/ui/hero-section-2';

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-white dark:bg-[#101922]">
      {/* Hero Section */}
      <HeroSection
        logo={{
          url: "",
          alt: "OH Pharmacy Logo",
          text: "Welcome to OH Pharmacy"
        }}
        title={
          <>
            Your Partner in <br />
            <span className="text-primary">Health & Wellness</span>
          </>
        }
        subtitle="Expert travel vaccinations, weight loss support, and wellness injections right here in Kent. Providing comprehensive healthcare services with care and precision."
        callToAction={{
          text: "BOOK AN APPOINTMENT",
          href: "/book-services",
        }}
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuACJT9xEVblSG9BgdONhzauh1Pgqs2YiQdALqxWci0h6zigwK-v1_UZdkYnTWpdD3y9Jzw6TaFya9Mrwxhc6wgBMyl64LPPDaqZrHxOrxy-qf7c_DION9I6IX8ug_-i7ke6U19FYMIr2X1GtBnholl6tVp3OyBSwE1r3yRUN4kZj1pzOpGl6HI5Y1XIrc32FXTTwDx_DcKCV7OgoUOipuYilC1j11McCe51YPJqfo65KDZvQRBA1BaHRt44WOyFcP7w-nuftE20Vlev"
        contactInfo={{
          phone: "0333 006 5650",
          address: "River House, 1 Maidstone Road, Sidcup, DA14 5RH",
        }}
      />

      {/* Featured Services */}
      <Feature72
        heading="Featured Services"
        description="Expert medical services tailored to your needs, delivered with care and precision. Our comprehensive healthcare solutions are designed to keep you and your family healthy."
        linkUrl="/Services"
        linkText="View All Services"
        features={[
          {
            id: "weight-loss",
            title: "Weight Loss Service",
            description: "We offer a private weight loss service in partnership with Expert Weight Loss. Our service offers online consultations, diet and exercise advice and regular check-in appointments.",
            image: "https://rifaraypharmacy.co.uk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-14-at-10.36.01-AM-1-qyj3h4a2iaabn95491vhqv1wv8x5rspscb8ohkqxco.jpeg",
            href: "/weight-loss-service"
          },
          {
            id: "vitamin-b12",
            title: "Vitamin B12",
            description: "We offer a private Vitamin B12 injection service at our pharmacy. Please complete your order online to get the injection at the pharmacy.",
            image: "https://rifaraypharmacy.co.uk/wp-content/uploads/elementor/thumbs/vitamin-B12-qce144eqv79v6iwx6f0p4216ezmqlm8trvy0srow2g.webp",
            href: "/Services/vitamin-b12"
          },
          {
            id: "travel-clinic",
            title: "Travel Clinic",
            description: "Are you travelling abroad soon? Get expert travel health advice, vaccines and antimalarials at our pharmacy.",
            image: "https://rifaraypharmacy.co.uk/wp-content/uploads/elementor/thumbs/travel-clinic-4-qnr2retumi3bud9bi4iskah0yhexbkygyjzleklt94.jpg",
            href: "/Travel-Clinic/travel-vaccination"
          },
          {
            id: "speciality-vaccine",
            title: "Speciality Vaccine",
            description: "We offer private speciality vaccines at our pharmacy, including Chickenpox, Shingles and HPV vaccines. Book your appointment online.",
            image: "https://rifaraypharmacy.co.uk/wp-content/uploads/elementor/thumbs/speciality-vaccine-1-1-qnr3drfp4oorwkskzsbfunflgb94chopd6f87fgtaw.jpg",
            href: "/Travel-Clinic/special-vaccination"
          }
        ]}
      />

      

      {/* About Us Section */}
      <section id="about" className="w-full  mx-auto bg-[#F4F7F6] dark:bg-[#182430] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#111418] dark:text-[#F4F7F6] text-3xl font-bold tracking-tight">Committed to Your Wellbeing</h2>
              <p className="text-[#617589] dark:text-[#a0aec0]  text-base leading-relaxed">At OH Pharmacy, our mission is to provide exceptional, patient-centered care. We believe in building lasting relationships within our community, offering not just treatments but also trusted advice and support for your health journey. Our dedicated team is here to ensure you receive the professional and compassionate service you deserve.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/Services">
                  <button
                   className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 h-12 px-5 bg-primary text-primary-foreground hover:text-white hover:bg-primary/90  rounded-full px-6 py-4  border border-white tracking-wide text-primary transition-colors hover:text-primary/80">
                    <span className="truncate">Browse Services</span>
                  </button>
                </Link>
                <Link href="/Services/contact-us">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 h-12 px-5 bg-[#E8A87C] text-[#005A5B] font-bold hover:bg-[#E8A87C]/90 transition-colors">
                    <span className="truncate">Contact Us Today</span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                className="rounded-xl object-cover w-full h-full aspect-[4/3]" 
                alt="A friendly pharmacist smiling behind the counter in a bright, modern pharmacy." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbBtctQoNv0eA17XksoLrRvIVKiJbDzMSX53Ph-naaSSfzT4a-zJvGhkRnAkWKolhR0q2NmfiEP4dXhl0WUQeFUxFPqroBV08W3F_posXumoRMlLxxLlbitplfF1h6nHnWN64uVAAGQGAz5FKdDdkoj3ugBTLT7CogQXk3hpOJo08YK91YrfvE50SwU4-DB6odbqUPpmxZqbv63St5tPQTIpxryE7dut-Q4EeyHR5FeUDeydLaCXeO408DlMHn_5b-gPz56ngr_pk4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111418] dark:text-[#F4F7F6]">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-[#617589] dark:text-[#a0aec0]">
              We're here to help. Contact us with any questions you may have.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm">
              <form action="#" className="space-y-6" method="POST">
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-[#F4F7F6]" htmlFor="name">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="name"
                      className="block w-full rounded border border-slate-300 dark:border-slate-700 bg-[#F4F7F6] dark:bg-[#182430] shadow-sm focus:border-[#005A5B] focus:ring-[#005A5B] sm:text-sm px-3 py-2 text-[#111418] dark:text-[#F4F7F6]"
                      id="name"
                      name="name"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-[#F4F7F6]" htmlFor="email">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="email"
                      className="block w-full rounded border border-slate-300 dark:border-slate-700 bg-[#F4F7F6] dark:bg-[#182430] shadow-sm focus:border-[#005A5B] focus:ring-[#005A5B] sm:text-sm px-3 py-2 text-[#111418] dark:text-[#F4F7F6]"
                      id="email"
                      name="email"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-[#F4F7F6]" htmlFor="message">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="block w-full rounded border border-slate-300 dark:border-slate-700 bg-[#F4F7F6] dark:bg-[#182430] shadow-sm focus:border-[#005A5B] focus:ring-[#005A5B] sm:text-sm px-3 py-2 text-[#111418] dark:text-[#F4F7F6]"
                      id="message"
                      name="message"
                      rows={4}
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 h-12 px-5 bg-primary text-white text-base font-bold hover:bg-[#005A5B]/90 transition-colors"
                    type="submit"
                  >
                    <span className="truncate">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/2">
              <div
                className="w-full h-full min-h-[400px] bg-center bg-no-repeat bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLvonob97GoHHlkoS2hT3g639U7Ufd0rFkBR2kJf74q6Sbex2-uVJogb66U3SsjCrKTLCLWcp3YBdlBAj5myYG-F3q4Xx4aNHeZ9JGbyMTx7vgfCai_UADX_lquOgryrZLOOU4qeAVPGt-yc0rLstZq6DEHCSRQjn5aPpa99rcms2I1wp3E_qiXhfr8YVD2mDN3WeqeoTi8eIQWAWaXggNFkcEvtXhDdF7RnF_7s7pl89JtHcGPBGSWuF7ds2QfxMY8ncqDjQQd7Ec")'
                }}
              />
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}