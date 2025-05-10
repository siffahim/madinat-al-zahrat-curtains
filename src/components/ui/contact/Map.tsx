const Map = () => {
  return (
    <div className="container">
      <div
        className="p-2 m-5 mb-20 rounded"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9286099550745!2d55.3935922!3d25.3401765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b9f8bbd6c2d%3A0x3cfa2f537db2a06b!2sMADINAT%20AL%20ZAHRAT%20FURNITURE%20%26%20CURTANS!5e0!3m2!1sen!2sbd!4v1741459199228!5m2!1sen!2sbd"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
