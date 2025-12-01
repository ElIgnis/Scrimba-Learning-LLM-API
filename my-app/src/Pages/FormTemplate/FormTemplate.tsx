import React from 'react';

export default function FormTemplate()
{
    function submitForm(formData: FormData)
    {
        const email = formData.get("email")
        const password = formData.get("password")
        console.log("Entered email: " + email + " password: " + password);

        const radioOptions = formData.get("radioOptions");
        console.log("RadioOption: " + radioOptions);

        const checkBoxOptions = formData.getAll("checkBoxOptions");
        console.log("Checkbox: " + checkBoxOptions);

        const dropdownOption = formData.get("dropdownOption");
        console.log("Dropdown: " + dropdownOption);

        const objectData = Object.fromEntries(formData);

        const allFormData = {
            ...objectData,
            checkBoxOptions,
        }
        console.log(allFormData);
    }

    return (
        <section>
            <h1>Form Template</h1>
            <form action={submitForm}>

                <label htmlFor={"name"}>Name</label>
                <input id={"email"}  type="email" name="email" placeholder={"a@a.com"} />

                <label htmlFor={"password"}>Password</label>
                <input id={"password"}  type="password" name="password"/>

                <label htmlFor={"description"}>Description</label>
                <textarea id={"description"} name="description"></textarea>

                <fieldset>
                    <legend>Radio Buttons</legend>
                    <label>
                        {/*Radio button must be same name for single selection*/}
                        <input type = "radio" name = "radioOptions" value = "option1" defaultChecked={true}/>
                        RadioButton 1
                    </label>
                    <label>
                        <input type = "radio" name = "radioOptions" value = "option2"/>
                        RadioButton 2
                    </label>
                    <label>
                        <input type = "radio" name = "radioOptions" value = "option3"/>
                        RadioButton 3
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Checkboxes</legend>
                    <label>
                        {/*Radio button must be same name for single selection*/}
                        <input type = "checkbox" name = "checkBoxOptions" value = "checkbox1"/>
                        Checkbox 1
                    </label>
                    <label>
                        <input type = "checkbox" name = "checkBoxOptions" value = "checkbox2"/>
                        Checkbox 2
                    </label>
                    <label>
                        <input type = "checkbox" name = "checkBoxOptions" value = "checkbox3"/>
                        Checkbox 3
                    </label>
                </fieldset>

                <label htmlFor={"dropdown"}>Dropdown</label>
                <select id={"dropdownOption"} name={"dropdownOption"} defaultValue={"defaultOption"} required>
                    <option value="defaultOption" disabled>Choose option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

                <button>Submit</button>

            </form>
        </section>
    );
}