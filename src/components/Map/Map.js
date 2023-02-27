import dynamic from "next/dynamic";

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift
const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
  suspense: true,
});

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

const MMap = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
  return (
    <div style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </div>
  );
};

const Map = dynamic(() => Promise.resolve(MMap), {
  ssr: false,
});

export default Map;
