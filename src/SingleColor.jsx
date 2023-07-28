import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      } catch (error) {
        toast.error(error.message("Failed to copy color to clipboard"));
      }
    } else {
      toast.error("Access to clipboard unavailable");
    }
  };

  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
