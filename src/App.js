import React, { Component } from 'react';
import './App.css';
import Module from './components/Module';
import styled from 'styled-components';

const AppWrapper = styled.section`
  text-align: Left;
  background: #F8F9FB;
`;
const Column = styled.section`
  width: 50%;
  float:left;
  min-height: 100vh;
  box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <Column>
          <Module
            title = "Issues"
            type  = "issues"
            category  = "issues"
            issues  = {[
                  {
                    title: "Possible Atrial Standstill",
                    assessment: "Has manifested as dyspnea (fixed with pacer changes) and unexpected aproxysmal episodes of chest pressure/pain without clear etiology. Has had CTA in the past that was negative for any aortopathy or PE. Per discussion with Dr. Vedantham, he is Migas chillwave kitsch, subway tile snackwave literally iPhone slow-carb twee venmo man bun kinfolk keffiyeh. Semiotics flannel cred adaptogen craft beer hoodie hammock knausgaard heirloom.",
                    planItems: [
                        {name:"Metoprolol Tartrate 25 mg, 30 TABLET, 6 refill(s)", type:"medication"},
                        {name:"NT-proBNP", type:"lab", result:"Abnormal"},
                        {name:"CK-MB(CK-2)", type:"lab"},
                        {name:"Troponin T", type:"lab"},
                      ],
                    favorite: true,
                    status: "high"
                  },
                  {
                    title: "Depressed Mood",
                    assessment: "Think this is partially adjustment disorder +/- BB. Will refer to therapist and check in with Dr. V regarding ongoing BB use.",
                    planItems: [
                        {name:"Psychology", type:"suggestion"},
                        {name:"As we discussed, this is likely due to a combination of the real stress of having an undiagnosed condition, this condition affecting your heart (which is linked to your mind), and possibly from a side effect of the metoprolol.", type:"suggestion"},
                        {name:"I would like you to see a therapist to check in regularly about how are you doing while you are going through this experience.", type:"suggestion"}
                    ],
                    favorite: true
                  },
                  {
                    title: "Elevated Cholesterol",
                    assessment: "Hx of elevated TG in the past, 10/15/18 350 on fasting TG. Currently on statin 20 mg and gemfibrozil 600 mg daily. Continue weight loss will follow-up with labs in 3 mos. Will consider increasing statin and/or gemfibrozil on repeat test in 3 months.",
                    planItems: [
                        {name:"Lipid Panel", type:"medication"},
                        {name:"Continue weight loss.", type:"suggestion"},
                        {name:"Avoid saturated fats and fried foods.", type:"suggestion"},
                        {name:"Incorporate lean meats and vegetables in your diet.", type:"suggestion"},
                        {name:"Increase in take of good fats- including almonds and walnuts and cold water fish like salmon and mackerel.", type:"suggestion"},
                    ]
                  },
                  {
                    title: "Right Nasal Polyp",
                    assessment: "Previously seen by EENT, reported to give recommendations (nasal spray etc) but non compliant. Uses vasaline PRN.",
                    planItems: [
                        {name:"Check in: How are your symptoms?", type:"checkin"},
                        {name:"Try to use a humidifer at night.", type:"suggestion"},
                        {name:"Let us know if it gets worst and we can refer to ENT again.", type:"suggestion"}
                    ]
                  },
                  {
                    title: "Diet for Longevity",
                    planItems: [
                        {name:"Avoid refined sugars", type:"suggestion"},
                        {name:"Moderate intake of whole grains & fruits", type:"suggestion"},
                        {name:"Use Olive or Avocado Oil", type:"suggestion"},
                        {name:"Eat legumes", type:"suggestion"},
                        {name:"Eat fatty fish", type:"suggestion"},
                        {name:"Eat fermented dairy: yogurt", type:"suggestion"},
                        {name:"Eat lean meats", type:"suggestion"},
                        {name:"Eat vegetables, fruits and nuts", type:"suggestion"}
                    ]
                  },
                  {
                    title: "Syncope (Fainting)",
                    assessment: "Previously seen by EENT, reported to give recommendations (nasal spray etc) but non compliant. Uses vasaline PRN.",
                    planItems: [
                        {name:"Check in: How are your symptoms?", type:"checkin"},
                        {name:"Try to use a humidifer at night.", type:"suggestion"},
                        {name:"Let us know if it gets worst and we can refer to ENT again.", type:"suggestion"}
                    ],
                    status: "moderate"
                  },
                  {
                    title: "Bilateral Leg Cramps",
                    assessment: "takes potassium or eats a banana which helps, Normal K 4.1 today",
                    planItems: [
                        {name:"We recommend you stay well hydrated.", type:"suggestion"},
                        {name:"You can try a magnesium supplement (Magnesium Oxide 400mg) as needed or eating a banana.", type:"suggestion"},
                        {name:"Please do not take more than 20 mEq of potassium chloride supplement in one day.", type:"suggestion"}
                    ]
                  }
                ]}
          />
        </Column>

        <Column>
          <Module
            title = "Allergies"
            type  = "tag"
            category  = "medication"
            tags  = {[
                  {text: "Mold", bg: "grey"},
                  {text: "Dust", bg: "grey"},
                  {text: "Pollen", bg: "grey"},
                  {text: "Wheat", bg: "grey"},
                  {text: "Soy", bg: "grey"},
                  {text: "Crab", bg: "grey"}
                ]}
          />
          <Module
            title = "Medications"
            type  = "table"
            category  = "medication"
            rows  = {[
                  {title: "predniSONE", subtitle: "1 mg oral tablet", line2:"Take one tablet daily."},
                  {title: "Levothyroxine", subtitle: "175 mcg (0.175 mg) oral tablet", line2:"Take one tablet daily."}
                ]}
          />
          <Module
            title   = "Notes"
            category    = "note"
            content = "Authentic umami hell of disrupt hammock irony you probably haven't heard of them tousled pork belly helvetica man braid celiac waistcoat."
          />
        </Column>
      </AppWrapper>
    );
  }
}

export default App;
