const GenderRadioBtn = ({ onRadioChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`cursor-pointer label gap-2 ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text text-base">Male</span>
          <input
            type="radio"
            name="radio-4"
            className="radio radio-xs mr-2"
            checked={selectedGender === "male"}
            onChange={() => onRadioChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`cursor-pointer label gap-2 ${
            selectedGender === "female" ? "selected" : ""
          } `}
        >
          <span className="label-text text-base">Female</span>
          <input
            type="radio"
            name="radio-4"
            className="radio radio-xs"
            checked={selectedGender === "female"}
            onChange={() => onRadioChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderRadioBtn;
