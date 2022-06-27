import {  useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { handleIsSubmitSucces, handleTogglePopupReview } from "../../redux/features/ReviewQuerySlice";

function PopupInputReview() {
  const [currentValue, setCurrentValue] = useState(5);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  
  const [userClicked, setUserClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setCurrentValue(value);
    setUserClicked(true);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = () => {
    dispatch(handleIsSubmitSucces())
  }

  return (
    <div style={styles.container}>
      <img
        src="/close-chat.svg"
        alt="close"
        onClick={()=>{dispatch(handleTogglePopupReview())}}
        className="absolute hover:cursor-pointer"
        style={{ top: "22px", right: "22px" }}
      />
      <h2 className="text-2xl font-semibold" style={{ marginBottom: "22px" }}>
        Tulis Review
      </h2>
      <Image
        src="/building.svg"
        alt="profile"
        width={81}
        height={81}
        className="rounded-full object-cover"
      />
      <p className="mt-2.5 text-base" style={{ marginBottom: "22px" }}>
        name
      </p>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <textarea
        placeholder="Additional Comments"
        onChange={() => {
          setUserClicked(true);
        }}
        className="bg-grey text-secondary focus:outline-blue"
        style={styles.textarea}
      />

      {userClicked ? (
        <button style={styles.button} className="bg-blue" onClick={()=>{handleSubmit()}}>
          Submit Review
        </button>
      ) : (
        <button style={styles.button} className="bg-secondary" disabled>
          Submit Review
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "339px",
    height: "456px",
    position: "relative",
    backgroundColor: "#fff",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 54,
    width: 236,
    border: "none",
    fontSize: "8px",
  },
  button: {
    border: "none",
    borderRadius: 6,
    color: "#fff",
    width: 235,
    height: 34,
    textAlign: "center",
    fontSize: 12,
  },
  buttonBlue: {
    backgroundColor: "#197BEB",
  },
};
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default PopupInputReview;
