'use client';
import Link from 'next/link';
import { Feature72 } from '@/components/ui/feature-72';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#101922]">
      {/* Hero Section */}
      <section className="flex justify-center items-center w-full">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-20">
          <div 
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-6 md:p-12"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b")`
            }}
          >
            <div className="flex flex-col gap-2 text-left max-w-2xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
                Your Partner in Health & Wellness.
              </h1>
              <h2 className="text-gray-200 text-base font-normal leading-normal md:text-lg">
              Expert travel vaccinations, weight loss support, and wellness injections right here in Kent
              </h2>
            </div>
            <div className="flex flex-row gap-2 text-left max-w-2xl">
            <Link href="/book-services">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 h-12 px-5 bg-[#005A5B] text-white text-base font-bold hover:bg-[#005A5B]/90 transition-colors">
                <span className="truncate">Book an Appointment</span>
              </button>
            </Link>
            <Link href="/Services/services">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#005A5B] h-12 px-5 bg-white text-[#005A5B] text-base font-bold hover:bg-white/90 transition-colors">
                <span className="truncate">View Services</span>
              </button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <Feature72
        heading="Featured Services"
        description="Expert medical services tailored to your needs, delivered with care and precision. Our comprehensive healthcare solutions are designed to keep you and your family healthy."
        linkUrl="/Services/services"
        linkText="View All Services"
        features={[
          {
            id: "travel-vaccinations",
            title: "Travel Vaccinations",
            description: "Stay protected worldwide with comprehensive vaccines. Our travel clinic provides expert advice and essential vaccinations for your journey, ensuring you travel safely and confidently.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS6mRfRaIdP7-HEwVuSx244H3sjjWnV7ymkxvhkznxJ92og1rnjIUc0SAlUBugMhq6qTAk11tEarz2WFLR3SlytvzoTGxdhJRf2F8WITjbi_trTrMzuSeoFP9_Q-b7-S84xda1ZNAFb3piDUNkXPp0AqjV8Y0eR_0t0LTYxXIvORb72ygcoyTIkbSlRe5NNCkxYHRb_NdHe9nVMRyFAHYr2oFEi39PsnN1BomOJqHZzYNxMEnYWIGz9tAUXbTHWNjfgRRN0snj-ovp",
            href: "/Travel-Clinic/travel-vaccination"
          },
          {
            id: "health-checks",
            title: "Private Health Checks",
            description: "Advanced screening for optimal wellness. Proactive health screening to monitor and manage your wellbeing with comprehensive private health check services.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmtSGLO_215TLN9x3DJRPc74L6tQnFmfzsOG6dFXPRvUZLjicde42UzgVnO7b7bVtCMG5Jtuo_p7cuFLIlGAODTOHh4u-U5u72fR-DwwzBgcQaB8yPJDXv9yhMW8poMuLQgxV1hS7H6oTL4HrDNKo1f5x26bFLZCvPn49KU75eHM_nuvAdzIVW6M_vJet8ww2QPwD9K4Hf5hvXk1qyIBp5Ewjv4HaoOrlQSPvuzQ7kVqNDuNnMwF0fIF-fukrC7uh5hkh7FBCdwEnU",
            href: "/Services/services"
          },
          {
            id: "minor-ailments",
            title: "Minor Ailments Clinic",
            description: "Quick and convenient consultations for common health concerns. Get expert advice and treatment for minor ailments without the need for a GP appointment.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKtF8edOsUvVB80dNCH6qsUHJAtSqkV5lXD4u9wSKMZjru-vjT9NbnS3sSFC0j5zf3tlB7zNkkYRrQMXC6vkFLQDOGYoNl5VJa56UIxIMSluKhx1UG9OJj3l4Exhz4VIpPX6cXBwg4FWywlFY9CRwcpBxyHEKHcILXSNki3Q-hsASeVdkzQ6h2GPWn3AwcXYYeyw-LXTkEy3J-UyJ_bz45hSI-NRd4VWii213cLdXY-ExsqtU5Rv8dN8C6uKAkZ7w8eiHqLNtSEF4D",
            href: "/Services/minor-ailement-clinic"
          },
          {
            id: "blood-tests",
            title: "Blood Tests",
            description: "A wide range of blood tests available with fast, accurate results. Comprehensive diagnostic testing to help monitor your health and detect potential issues early.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL9SiZDq9g44NWAMHeMhlgyxjJlkZbP0xPoxyWeTQn3LeeW3AbF0e5_cnSIrkb4J2NAJs46745dIm5DB_41rwGnJ8hZceg_PIw88U3AuHmPl-pAMzCd5NbxwgcHaUnGGzsOG7_BfZSM3jmeYtAQO3lslgV2UC0DhNyYPEBd-46WBYILph2aTP9mExDyPJn6pXxYkH5Hq5lC8qHcItjuFQmYsalcYCuQUcmu_q8v7rPHprrqOXBBPsZN1yM_6piEJZkxcd6g98wI0o-",
            href: "/Services/services"
          }
        ]}
      />

      

      {/* About Us Section */}
      <section id="about" className="w-full bg-[#F4F7F6] dark:bg-[#182430] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#111418] dark:text-[#F4F7F6] text-3xl font-bold tracking-tight">Committed to Your Wellbeing</h2>
              <p className="text-[#617589] dark:text-[#a0aec0]  text-base leading-relaxed">At OH Pharmacy, our mission is to provide exceptional, patient-centered care. We believe in building lasting relationships within our community, offering not just treatments but also trusted advice and support for your health journey. Our dedicated team is here to ensure you receive the professional and compassionate service you deserve.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <button
                   className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#005A5B] text-white text-base font-bold hover:bg-[#005A5B]/90 transition-colors">
                    <span className="truncate">Meet Our Team</span>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#E8A87C] text-[#005A5B] font-bold hover:bg-[#E8A87C]/90 transition-colors">
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
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#005A5B] text-white text-base font-bold hover:bg-[#005A5B]/90 transition-colors"
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