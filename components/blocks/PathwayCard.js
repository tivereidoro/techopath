function PathwayCard({ pathway }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-6 border rounded-xl shadow-sm bg-white"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold">{pathway.title}</h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {pathway.compatibility}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Skills to Learn:</h4>
          <div className="flex flex-wrap gap-2">
            {pathway.skillsToLearn.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-blue-100 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium">Salary Range:</h4>
          <p className="text-lg font-semibold">{pathway.salaryRange}</p>

          <h4 className="font-medium mt-3">Resources:</h4>
          <ul className="space-y-1 mt-1">
            {pathway.resources.map((resource, i) => (
              <li key={i}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <LinkIcon className="w-4 h-4" />
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.0607 8.11091L16.7072 4.46447C17.6977 3.47393 19.3023 3.47393 20.2928 4.46447C21.2834 5.45501 21.2834 7.05964 20.2928 8.05018L16.6569 11.6861C15.2663 13.0767 12.7337 13.0767 11.3431 11.6861C11.0526 11.3956 11.0526 10.9225 11.3431 10.632C11.6337 10.3414 12.1068 10.3414 12.3974 10.632C13.182 11.4165 14.818 11.4165 15.6026 10.632L19.2385 6.99607C19.629 6.60555 19.629 5.97238 19.2385 5.58186C18.848 5.19133 18.2148 5.19133 17.8243 5.58186L14.1779 9.22829C13.9873 9.41885 13.731 9.53114 13.4607 9.53114C13.1904 9.53114 12.9341 9.41885 12.7435 9.22829L12.0329 8.51772C11.6424 8.12719 11.6424 7.49403 12.0329 7.1035C12.4234 6.71298 13.0566 6.71298 13.4471 7.1035L13.0607 7.48991L13.4471 7.1035C13.8377 7.49403 13.8377 8.12719 13.4471 8.51772L13.0607 8.11091Z" />
      <path d="M8.11091 13.0606L7.1035 13.447C6.71298 13.8375 6.71298 14.4707 7.1035 14.8612C7.49403 15.2517 8.12719 15.2517 8.51772 14.8612L9.22829 14.1506C9.41885 13.9601 9.53114 13.7038 9.53114 13.4335C9.53114 13.1632 9.41885 12.9069 9.22829 12.7163L5.58186 9.0699C5.19133 8.67938 5.19133 8.04621 5.58186 7.65569C5.97238 7.26516 6.60555 7.26516 6.99607 7.65569L10.632 11.2916C11.4165 12.0762 11.4165 13.7122 10.632 14.4967C10.3414 14.7873 9.86829 14.7873 9.57773 14.4967C9.28717 14.2062 9.28717 13.733 9.57773 13.4425L5.9418 9.80656C4.55123 8.41599 4.55123 5.88343 5.9418 4.49286C6.93234 3.50232 8.53697 3.50232 9.52751 4.49286L13.174 8.13929C13.5645 8.52981 13.5645 9.16298 13.174 9.5535C12.7835 9.94403 12.1503 9.94403 11.7598 9.5535L8.11091 5.90462L9.5535 7.1035C9.94403 7.49403 9.94403 8.12719 9.5535 8.51772C9.16298 8.90824 8.52981 8.90824 8.13929 8.51772L6.9404 7.07513L8.51772 8.51772C8.90824 8.90824 8.90824 9.54141 8.51772 9.93193C8.12719 10.3225 7.49403 10.3225 7.1035 9.93193L5.66091 8.1106L7.1035 6.66801C7.49403 6.27748 7.49403 5.64432 7.1035 5.2538C6.71298 4.86327 6.07981 4.86327 5.68929 5.2538L4.46447 6.47861C3.47393 7.46915 3.47393 9.07378 4.46447 10.0643L8.11091 13.0606Z" />
    </svg>
  );
}
