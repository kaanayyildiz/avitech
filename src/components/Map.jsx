export default function Map() {
  return (
    <>
    
    <div style={{ width: "100%" }} className="overflow-hidden border-8 border-[#FFF] rounded-md drop-shadow-lg">
      <iframe
        width="100%"
        height={200}
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=41.09325,%2029.09603+(Avitech%20Metal)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
      >
        &lt;a href="https://www.gps.ie/"&gt;gps vehicle tracker&lt;/a&gt;
      </iframe>
    </div>

    </>
  )
}
