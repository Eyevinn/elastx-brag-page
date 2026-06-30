import { useEffect, useState } from "react";

function Counter({
  target,
  duration = 1500,
}: {
  target: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return <span>{value.toLocaleString()}</span>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0a] text-zinc-200 font-mono">
      {/* Section 1 — Hero */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
          Eyevinn Open Source Cloud
        </p>
        <h1 className="text-[40px] sm:text-[64px] font-bold text-green-400 font-mono leading-none">
          MIGRATION COMPLETE
        </h1>
        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl text-center mt-4">
          From Linode to Elastx. 2,030 pods. Zero tenant downtime.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            { value: 2030, label: "RUNNING PODS", counter: true },
            { value: 210, label: "NAMESPACES", counter: true },
            { value: 171, label: "OSS SERVICES", counter: true },
            { value: "~1,287", label: "TENANTS", counter: false },
            { value: "0", label: "TENANT DOWNTIME", counter: false },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6 py-4 border border-green-900 rounded-lg bg-[#0d1a0d]"
            >
              <span className="text-3xl sm:text-4xl font-bold text-green-400 tabular-nums">
                {stat.counter ? (
                  <Counter target={stat.value as number} />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — What Moved */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-zinc-500 uppercase tracking-widest text-center mb-10">
            WHAT MOVED
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                count: 210,
                label: "Namespaces",
                desc: "One Kubernetes namespace per service on the platform, each migrated with full verification.",
              },
              {
                count: 171,
                label: "OSS Services",
                desc: "Unique open source tools in the catalog — databases, media servers, AI tools, and more.",
              },
              {
                count: 2030,
                label: "Running Pods",
                desc: "All tenant workloads now running on Elastx infrastructure in Sweden.",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="border border-green-900 bg-[#0d1a0d] rounded-lg p-6"
              >
                <div className="text-4xl font-bold text-green-400 font-mono">
                  <Counter target={card.count} />
                </div>
                <div className="text-sm text-zinc-400 uppercase tracking-widest mt-1">
                  {card.label}
                </div>
                <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How It Was Done */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-zinc-500 uppercase tracking-widest text-center mb-10">
            HOW IT WAS DONE
          </p>
          <div className="max-w-2xl mx-auto bg-[#050f05] border border-green-900 rounded-lg p-6 font-mono text-sm leading-7">
            <p className="text-green-500">
              $ migration-agent --env prod --target elastx
            </p>
            <div className="text-green-200/70 mt-2">
              <p>The migration was orchestrated by AI agents.</p>
              <p>Each service namespace was analyzed, classified,</p>
              <p>and moved with per-instance verification.</p>
              <br />
              <p>Persistent stores, parameter-store Valkies, and</p>
              <p>stateful services required custom migration paths.</p>
              <p>Agents handled 210 namespaces across multiple</p>
              <p>sessions, with human review at each phase gate.</p>
              <br />
              <p>
                1,287 tenants experienced no disruption.
                <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse align-middle" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Zero Downtime */}
      <section className="bg-[#060d06] py-28 sm:py-36 text-center px-4">
        <div className="text-8xl sm:text-9xl font-bold font-mono text-green-400">
          0
        </div>
        <div className="border-t border-green-900 max-w-xs mx-auto my-6" />
        <p className="text-sm text-zinc-400 uppercase tracking-widest">
          tenant downtime during migration
        </p>
        <p className="text-sm text-zinc-500 max-w-md mx-auto mt-8 leading-relaxed">
          Every service remained reachable throughout the migration. Proxy
          ingresses on Linode forwarded traffic to Elastx before DNS cutover.
          Tenants did not need to take any action.
        </p>
      </section>

      {/* Section 5 — What Remains on Linode */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-zinc-500 uppercase tracking-widest text-center mb-10">
            REMAINING ON LINODE
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
            {[
              "OSC Platform Core",
              "MyApps Ingress",
              "Symphony Media Bridge",
              "Strom",
            ].map((item) => (
              <span
                key={item}
                className="border border-zinc-700 rounded px-3 py-1.5 text-xs font-mono text-zinc-400 bg-[#111]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-xs text-zinc-500 mt-6 max-w-lg mx-auto text-center leading-relaxed">
            Platform infrastructure services remain on Linode while all tenant
            workloads run on EU-jurisdiction Elastx infrastructure in Stockholm,
            Sweden.
          </p>
        </div>
      </section>

      {/* Section 6 — Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="flex justify-between items-center max-w-5xl mx-auto px-4 sm:px-8 text-xs text-zinc-600 font-mono flex-wrap gap-2">
          <span>Eyevinn Open Source Cloud</span>
          <span>app.osaas.io</span>
          <span>June 2026</span>
        </div>
      </footer>
    </div>
  );
}
