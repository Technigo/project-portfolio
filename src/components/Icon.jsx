import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Icon.module.css";

const Icon = ({ name }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../assets/${name}.svg`);
        ImportedIconRef.current = namedImport;
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <img className={styles.icon} src={ImportedIcon} alt={`${name} icon`} />
    );
  }

  return null;
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
