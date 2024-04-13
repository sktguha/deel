export default function getBoldedText(label: string, text: string) {
    return <div dangerouslySetInnerHTML={{
      __html: label.split(text).join("<b>" + text + "</b>")
    }} />;
  }