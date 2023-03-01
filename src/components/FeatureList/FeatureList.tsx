export function FinishedRow({ text }: { text: string }) {
  return (
    <li className="flex items-center">
      <svg
        className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      {text}
    </li>
  );
}

export function TodoRow({ text }: { text: string }) {
  return (
    <li className="flex items-center">
      <svg
        className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        ></path>
      </svg>
      {text}
    </li>
  );
}

export default function FeatureList() {
  const finishedFeatures = ["Visualize Strava activities."];
  const todoFeatures = [
    "Generate random route of given length, start and end.",
    "Generate random route with prority of not visited streets.",
    "Export generated route to Strava.",
    "Visualize Garmin activities.",
    "Export generated route to Garmin.",
  ];

  return (
    <div className="container mx-auto grow">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Upcoming features:
      </h2>
      <ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
        {finishedFeatures.map((v, k) => (
          <FinishedRow key={k} text={v} />
        ))}
        {todoFeatures.map((v, k) => (
          <TodoRow key={k} text={v} />
        ))}
      </ul>
    </div>
  );
}
