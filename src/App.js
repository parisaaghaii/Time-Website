import React, { useState } from "react";
import "./App.css";
import "./Styles/timedate.css";
import "./Styles/changedate.css";
import "./Styles/tophead.css";
import "./Styles/time.css"
import backgroundtop from "./assets/images/background-top.png";
import Button from "./component/Button";
import Select from "./component/Select";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="time-website">
      <img src={backgroundtop} className="backgroundImage" />
      <div className="boxs ">
        <div className="time-top">
          <div className="time-top-inner">تاریخ امروز</div>
          <div className="rowdate">
            <div className="rowdate-borj">
              <div className="rowdate-col">خورشیدی</div>
              <div className="rowdate-col-date">۱۴۰۰/۰۸/۱۷</div>
              <div className="rowdate-col-date">دوشنبه-۱۷آبان۱۴۰۰</div>
            </div>
            <div className="rowdate-borj">
              <div className="rowdate-col">میلادی</div>
              <div className="rowdate-col-date-miladi">2021-11-08</div>
              <div className="rowdate-col-date-miladi">
                monday-2021 08 Novamber
              </div>
            </div>
            <div className="rowdate-borj">
              <div className="rowdate-col">قمری</div>
              <div className="rowdate-col-date">۱۴۴۳/۰۴/۰۲</div>
              <div className="rowdate-col-date">الاثنین-۲ ربیع الثانی۱۴۴۳</div>
            </div>
            <div className="rowdate-borj">
              <div className="rowdate-col">برج فلکی</div>
              <div className="rowdate-col-date">عقرب</div>
            </div>
          </div>
        </div>
        <div className="time">
          <div className="time-clock">
            This establishes the main-axis, thus defining the direction flex
            items are placed in the flex container. Flexbox is (aside from
            optional wrapping) a single-direction layout concept. Think of flex
            items as primarily laying out either in horizontal rows or vertical
            columns.
          </div>

          <div className="time-ofogh">
            <div className="time-ofogh-title">
              <div className="time-ofogh-title-text">
                {" "}
                اوقات شرعی به افق شهرها
              </div>
            </div>
            <div className="time-select">
              <Select
                placeholder="تهران"
                selected={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <option>قزوین</option>
                <option>رشت</option>
                <option>مشهد</option>
                <option>مازندران</option>
                <option>زنجان</option>
                <option>همدان</option>
                <option>کرمان</option>
              </Select>
              <Select
                placeholder="تهران"
                selected={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <option>قزوین</option>
                <option>رشت</option>
                <option>مشهد</option>
                <option>مازندران</option>
                <option>زنجان</option>
                <option>همدان</option>
                <option>کرمان</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="time-note"></div>
        <div className="date">
          edgbjlergjmeThis establishes the main-axis, thus defining the dir
          <Button />
        </div>
      </div>
      <div className="boxs ">
        edgbjlergjmeThis establishes the main-axis, thus defining the direction
        flex items are placed in the flex container. Flexbox is (aside from
        optional wrapping) a single-direction layout concept. Think of flex
        items as primarily laying out either in horizontal rows or vertical
        columns.r
      </div>
      <div className="boxs ">
        edgbjlergjmeThis establishes the main-axis, thus defining the direction
        flex items are placed in the flex container. Flexbox is (aside from
        optional wrapping) a single-direction layout concept. Think of flex
        items as primarily laying out either in horizontal rows or vertical
        columns.r
      </div>
      <div className="boxs ">
        edgbjlergjmeThis establishes the main-axis, thus defining the direction
        flex items are placed in the flex container. Flexbox is (aside from
        optional wrapping) a single-direction layout concept. Think of flex
        items as primarily laying out either in horizontal rows or vertical
        columns.r
      </div>
    </div>
  );
}

export default App;
