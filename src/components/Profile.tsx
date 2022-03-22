import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/css/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/brunorguerra.png" alt="Bruno Guerra" />
      <div>
        <strong>Bruno Guerra</strong>
        <p>
          <img src="icons/up.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
