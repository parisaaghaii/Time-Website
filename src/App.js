import React, { useState } from "react";
import "./App.css";
import "./Styles/timedate.css";
import "./Styles/changedate.css";
import "./Styles/tophead.css";
import "./Styles/time.css";
import backgroundtop from "./assets/images/background-top.png";
import sunrise from "./assets/images/sunrise.png";
import comma from "./assets/images/comma.png";
import sun from "./assets/images/sun.jpg";
import sun1 from "./assets/images/sun1.png";
import sunmoon from "./assets/images/sun-and-moon.png";
import halfmoon from "./assets/images/half-moon.png";
import moon from "./assets/images/night.png";
import Button from "./component/Button";
import Select from "./component/Select";
import Clock from "./component/Clock";
import TimeDegital from "./component/TimeDegital";
import JCalendar from "reactjs-persian-calendar";

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
            <div className="design-clock">
              <Clock />
            </div>
            <div className="time-degital">
              <TimeDegital />
            </div>
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
            <div style={{ display: "flex" }}>
              <div className="sunIcon">
                <div>
                  <img src={sunrise} alt="اذان" />
                </div>
                <div>
                  <img src={sun} alt="اذان" />
                </div>
                <div>
                  <img src={sun1} alt="اذان" />
                </div>
              </div>
              <div className="time-azan">
                <div className="time-azan">اذان صبح</div>
                <div className="time-azan">طلوع خورشید</div>
                <div className="time-azan">اذان ظهر</div>
              </div>

              <div className="moonIcon">
                <div>
                  <img src={sunmoon} alt="اذان" />
                </div>
                <div>
                  <img src={halfmoon} alt="اذان" />
                </div>
                <div>
                  <img src={moon} alt="اذان" />
                </div>
              </div>
              <div className="time-azan">
                <div className="time-azan">غروب خورشید</div>
                <div className="time-azan">اذان مغرب</div>
                <div className="time-azan">نیمه شب شرعی</div>
              </div>
            </div>
          </div>
        </div>
        <div className="time-note">
          <div className="time-note-comma">
            <img src={comma} />
          </div>
          <div className="time-note-text">
            از چشم‌انداز جوانی که بنگری، زندگی آینده‌ای دراز و بی‌پایان است؛ ولی
            از چشم‌انداز پیری، تنها گذشته‌ای بسیار کوتاه به چشمت می‌آید. وقتی با
            کشتی دور می‌شویم، اجزای ساحل ریز و ریزتر می‌شوند و امکان شناسایی و
            تمایزشان نیز کمتر؛ هم‌چون سال‌هایی که پشت سر نهاده‌ایم با همه
            رویدادها و تکاپوهایشان.
          </div>
        </div>
        <div className="date">
          <div style={{ display: "flex", padding: "15px" }}>
            <JCalendar
              locale={"fa"}
              color={"#D73333"}
              size={40}
              onClick={console.log}
              itemRender={(key, item, children) => {
                console.log(key, item);
                if (
                  key === "w0_d7" ||
                  key === "w1_d7" ||
                  key === "w2_d7" ||
                  key === "w3_d7" ||
                  key === "w4_d7"
                ) {
                  return <span style={{ color: "red" }}>{children}</span>;
                }
                return <span>{children}</span>;
              }}
            />
          </div>
          <div>
            <div className="date-monasebatha">مناسبت های ماه آبان</div>
            <div
              style={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                clear: "both",
              }}
            >
              <ul className="date-events">
                <li className="date-events-text">
                  <span className="date-events-days">۱ آبان </span> روز آمار و
                  برنامه ریزی
                </li>
                <li className="date-events-text" style={{ color: "red" }}>
                  <span className="date-events-days">۲ آبان </span>  میلاد
                  رسول اکرم و امام جعفر صادق علیه السلام
                </li>
                <li className="date-events-text">
                  <span className="date-events-days">۷ آبان </span> سالروز
                  ورود کوروش بزرگ به بابل در سال 539 پیش از میلاد
                </li>
                <li className="date-events-text">
                  <span className="date-events-days">۸ آبان </span>  روز
                  نوجوان
                </li>
                <li className="date-events-text">
                  <span className="date-events-days">۱۰ آبان </span>
                    روز، جشن آبانگان  
                </li>
                <li className="date-events-text">
                  <span className="date-events-days">۱۳ آبان </span>  روز دانش آموز</li>
                <li className="date-events-text">
                  <span className="date-events-days">۱۴ آبان </span>  روز فرهنگ عمومی</li>
                <li className="date-events-text">
                  <span className="date-events-days">۱۵ آبان </span>  جشن میانه پاییز</li>
                <li className="date-events-text">
                  <span className="date-events-days">۱۸ آبان </span>  روز ملی کیفیت</li>
                <li className="date-events-text">
                  <span className="date-events-days">۲۳ آبان </span>
                    ولادت امام حسن عسکری علیه السلام
                </li>
                <li className="date-events-text">
                  <span className="date-events-days">۲۳ آبان </span>  روز جهانی دیابت</li>
                <li className="date-events-text">
                  <span className="date-events-days">۲۴ آبان </span>
                   روز کتاب و کتابخوانی
                </li>
                <li className="date-events-text">
                  <span className="date-events-days">۲۵ آبان </span>
                    وفات حضرت معصومه سلام الله علیها
                </li>
                <li className="date-events-text">
                  <span className="date-events-days">۲۷ آبان </span> روز جهانی فلسفه</li>
                <li className="date-events-text">
                  <span className="date-events-days">۲۸ آبان </span>  روز جهانی آقایان</li>
                <li className="date-events-text">
                  <span className="date-events-days">۲۹ آبان </span> روز جهانی کودک</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="boxs ">
        edgbjlergjmeThis establishes the main-axis, thus defining the direction
        flex items are placed in the flex container. Flexbox is (aside from
        optional wrapping) a single-direction layout concept. Think of flex
        items as primarily laying out either in horizontal rows or vertical
        columns.r
        <Button />
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
// D73333;
