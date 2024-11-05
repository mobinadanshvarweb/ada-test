const Icon = ({
  src,
  className,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <img src={src} alt="" className={className} width={width} height={height} />
  );
};

export default Icon;
