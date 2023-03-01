"use client";

import { useDispatch } from "react-redux";
import { setExampleRoutes, setRoutes } from "~/slices/routesSlice";
import { store } from "~/store/store";

export default function MapHeader() {
  const dispatch = useDispatch();

  const showExampleData = () => {
    dispatch(setRoutes(store.getState().routes.exampleRoutes));
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <div className="mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Cover Map
        </h1>
      </div>

      <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
        See all your routes at once.
      </p>

      <p>
        Connect your{" "}
        <a className="font-medium text-orange-700 hover:underline">
          Strava account
        </a>{" "}
        or check{" "}
        <button
          onClick={() => showExampleData()}
          className="font-medium text-orange-700 hover:underline"
        >
          example data
        </button>
        .
      </p>
    </div>
  );
}
