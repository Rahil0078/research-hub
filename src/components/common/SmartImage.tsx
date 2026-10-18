import { useState, type ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

const SmartImage = ({
  src,
  fallback,
  alt,
  onError,
  ...props
}: SmartImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!hasFailed && fallback && currentSrc !== fallback) {
      setHasFailed(true);
      setCurrentSrc(fallback);
    }
    onError?.(e);
  };

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt ?? ""}
      decoding="async"
      loading={props.loading ?? "lazy"}
      onError={handleError}
    />
  );
};

export default SmartImage;
