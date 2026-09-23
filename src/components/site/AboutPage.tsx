import { ArrowRight, Award, CheckCircle2, Eye, Target } from "lucide-react";
import PageBanner from "./PageBanner";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import CtaBand from "./CtaBand";
import Counters from "./Counters";
import { CERTIFICATIONS, IMAGES, MILESTONES, TEAM, VALUES } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        crumb="About Us"
        image={IMAGES.aboutCrew}
        description="Two carpenters started this company with a pickup truck and a promise. Here is how we kept it for 27 years."
      />
      <Counters />

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Our story"
              title="Built One Honest Job at a Time"
            />
            <Reveal delay={100}>
              <div className="mt-6 space-y-4 leading-relaxed text-bodytext">
                <p>
                  In 1998, Ray Donnelly and Tom Alvarez were framing houses for a
                  builder who kept making promises to clients that the crews knew
                  could not be kept. They figured they could do better on their
                  own, so they bought a used pickup truck, rented a storage unit
                  for their tools, and Northcrest was born. The name came from
                  Ray's habit of scheduling framing jobs early in the morning, when
                  the sun cleared the tree line on the north side of town.
                </p>
                <p>
                  The first year we built four homes. We still frame most of our
                  own work today, which is fairly rare for a company our size, and
                  honestly it is the main reason our quality holds up. When the
                  people running the company have also spent years swinging a
                  hammer, the schedules we promise are schedules we know we can
                  keep.
                </p>
                <p>
                  Today Northcrest is 120 people with offices in Raleigh and
                  Charlotte. We build office buildings, warehouses, schools,
                  townhome communities, custom homes and the occasional bridge.
                  What has not changed is how we treat clients: you get the truth,
                  a fair price, and a building we are proud to drive past.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="relative">
            <img
              src={IMAGES.aboutTrio}
              alt="Northcrest team reviewing project plans"
              className="h-[520px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -left-6 hidden bg-ink p-7 text-white shadow-xl shadow-black/25 sm:block">
              <p className="flex items-center gap-2 font-display text-3xl font-bold text-brand">
                <Award className="h-7 w-7" />
                Licensed & Bonded
              </p>
              <p className="mt-1 text-sm text-white/70">
                Unlimited general contractor in three states
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full border border-ink/10 bg-white p-10">
              <span className="flex h-14 w-14 items-center justify-center bg-brand">
                <Target className="h-7 w-7 text-white" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold uppercase tracking-wide text-ink">
                Our mission
              </h3>
              <p className="mt-3 leading-relaxed text-bodytext">
                To be the contractor people call back. We do that by keeping our
                promises on schedule and budget, by communicating like adults,
                and by building things that hold up long after we have left the
                site. Every estimate we write and every wall we frame either
                moves us toward that goal or it does not.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full border border-ink/10 bg-white p-10">
              <span className="flex h-14 w-14 items-center justify-center bg-ink">
                <Eye className="h-7 w-7 text-brand" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold uppercase tracking-wide text-ink">
                Where we are headed
              </h3>
              <p className="mt-3 leading-relaxed text-bodytext">
                We want Northcrest to be the first name developers, families and
                municipalities think of in the Carolinas when they need something
                built properly. That means growing carefully, promoting our best
                people from within, and never taking on more work than we can
                give our full attention. Steady beats fast.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            kicker="What we stand for"
            title="Four Values, No Posters"
            text="These are not words on a wall in our office. They are the standards our crews get measured against every week."
            align="center"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group h-full border-t-2 border-brand bg-cream p-8 transition hover:bg-ink">
                  <span className="font-display text-4xl font-bold text-brand">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-wide text-ink transition group-hover:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bodytext transition group-hover:text-white/65">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            kicker="Milestones"
            title="Twenty Seven Years in the Making"
          />
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={(i % 2) * 100}>
                <div className="flex gap-6">
                  <span className="flex h-20 w-20 shrink-0 flex-col items-center justify-center bg-ink font-display text-2xl font-bold text-brand">
                    {m.year}
                  </span>
                  <div className="border-l-2 border-brand/30 pl-6">
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-bodytext">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            kicker="Leadership"
            title="The People You Will Actually Meet"
            text="No figureheads here. These four are on job sites and in estimate meetings every week."
            align="center"
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 90}>
                <div className="group border border-ink/10 bg-white">
                  <div className="h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold uppercase tracking-widest text-brand">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-bodytext">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead
            kicker="Credentials"
            title="Fully Licensed, Bonded and Accountable"
            text="Ask for proof of anything on this list and we will send it the same day."
            light
          />
          <Reveal delay={100}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="leading-snug">{c}</span>
                </li>
              ))}
            </ul>
            <a
              href="#/contact"
              className="group mt-10 inline-flex items-center gap-2 bg-brand px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark"
            >
              Work with us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
