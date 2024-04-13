export default function getBoldedText(label, text) {
    return <div dangerouslySetInnerHTML={{
      __html: label.split(text).join("<b>" + text + "</b>")
    }} />;
  }