import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Asset = ({ name, format, folder }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `../../public/assets/${folder}/${name}.${format}`
        );
        ImportedIconRef.current = namedImport;
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, folder, format]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <img src={ImportedIcon} alt={`${name} icon`} title={name} />;
  }

  return null;
};

export default Asset;

Asset.propTypes = {
  name: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  folder: PropTypes.string.isRequired,
};
