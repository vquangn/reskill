import { Dropdown } from "@gjensidige/core-components/lib/forms/dropdown";
import { useState } from "react";

export function ChooseEvent() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Dropdown
        id="dropdown2"
        labelText="With help text"
        name={`name`}
        onChange={(newValue) => setValue(newValue)}
        placeholder="Select an option"
        helpText="Velg hendelse som beskriver skaden best. Er skaden påført av ukjent skadevolder velger eneuhell"
        value={value}
        options={[
          { labelText: "Glass", value: "Glass" },
          { labelText: "Nøkkel", value: "Nøkkel" },
          { labelText: "Eneuhell", value: "Eneuhell" },
          { labelText: "Sammenstøtt", value: "Sammenstøtt" },
        ]}
      />
    </div>
  );
}
