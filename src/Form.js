import Experience from "./Experience"
import Education from "./Education"
import Personal from "./Personal"
import React from "react"
import Payer from "./Payer";
export default function Form({
    updatePersonalField,
    updateProfileImg,
    experience,
    updateExperienceField,
    deleteExperience,
    addExperience,
    education,
    updateEducationField,
    addEducation,
    deleteEducation,
    handlePrint,
    Payer,
}) {

    return (
        function Payer() {

            async function initiatePayment() {
              const resInit = await fetch('http://localhost:6300/transactions/initier')
              if (resInit.status !== 200) {
                console.log("Échec de l'initiation du paiement")
                return
              }
              const transaction = await resInit.json()
          
              console.log('transaction', transaction)
              window.open(transaction.urlPaiement);
            }
          
        <form id="form">
            <Personal
                updateProfileImg={updateProfileImg}
                updatePersonalField={updatePersonalField}
            />
            <Experience
                updateExperienceField={updateExperienceField}
                experience={experience}
                addExperience={addExperience}
                deleteExperience={deleteExperience}
            />
            <Education
                updateEducationField={updateEducationField}
                education={education}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
            />
            <button className="Print btn" type="button" onClick={Payer}>
                Print it
            </button>
        </form>
    );
}