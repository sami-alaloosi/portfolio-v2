/** @format */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkButtons({ open, setOpen, jobs = [] }) {
  const clickHandler = (idx) => setOpen(idx);

  return (
    <div>
      <div className="block">
        <nav
          className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          {jobs.map((job, jobIdx) => (
            <div
              key={job.name}
              onClick={() => clickHandler(jobIdx)}
              className={classNames(
                jobIdx === open
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700",
                jobIdx === 0 ? "rounded-l-lg" : "",
                jobIdx === jobs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden  py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
              )}
              aria-current={open === jobIdx ? "page" : undefined}
            >
              <span>{job.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  open === jobIdx
                    ? "bg-gradient-to-r from-cyan-600 to-green-400"
                    : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
