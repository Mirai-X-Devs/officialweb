import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-2 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={64}
        height={64}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-2 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-8 h-8 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={40}
                  height={40}
                  alt={item}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
