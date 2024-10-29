import johanna from "./assets/johanna.jpg";

export const LetsTalk = () => {
  return (
    <section className="letsTalk">
      <h2>Let's Talk</h2>

      <img className="letsTalkAvatar" src={johanna} />
      <div className="letsTalkText">
        Johanna Catalini Smith
        <br />
        +46(0)000 00 00 00
        <br />
        johannacatalini@gmail.com
      </div>

      <div className="letsTalkIcons">
        <a href="https://www.linkedin.com/in/johanna-catalini-smith-b08a771b5/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1875 25V10.9844H5.82812V25H10.1875ZM7.98438 9.10938C9.39062 9.10938 10.5156 7.9375 10.5156 6.53125C10.5156 5.17188 9.39062 4.04688 7.98438 4.04688C6.625 4.04688 5.5 5.17188 5.5 6.53125C5.5 7.9375 6.625 9.10938 7.98438 9.10938ZM26.4531 25H26.5V17.3125C26.5 13.5625 25.6562 10.6562 21.25 10.6562C19.1406 10.6562 17.7344 11.8281 17.125 12.9062H17.0781V10.9844H12.9062V25H17.2656V18.0625C17.2656 16.2344 17.5938 14.5 19.8438 14.5C22.0938 14.5 22.1406 16.5625 22.1406 18.2031V25H26.4531Z"
              fill="#D0D0D0"
            />
          </svg>
        </a>

        <a href="https://github.com/johannacatalinismith">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.10938 18.6562C8.10938 18.5625 8.01562 18.4688 7.875 18.4688C7.73438 18.4688 7.64062 18.5625 7.64062 18.6562C7.64062 18.75 7.73438 18.8438 7.875 18.7969C8.01562 18.7969 8.10938 18.75 8.10938 18.6562ZM6.65625 18.4219C6.65625 18.5156 6.75 18.6562 6.89062 18.6562C6.98438 18.7031 7.125 18.6562 7.17188 18.5625C7.17188 18.4688 7.125 18.375 6.98438 18.3281C6.84375 18.2812 6.70312 18.3281 6.65625 18.4219ZM8.76562 18.375C8.625 18.375 8.53125 18.4688 8.53125 18.6094C8.53125 18.7031 8.67188 18.75 8.8125 18.7031C8.95312 18.6562 9.04688 18.6094 9 18.5156C9 18.4219 8.85938 18.3281 8.76562 18.375ZM11.8125 0.375C5.34375 0.375 0.375 5.34375 0.375 11.8125C0.375 17.0156 3.60938 21.4688 8.29688 23.0625C8.90625 23.1562 9.09375 22.7812 9.09375 22.5C9.09375 22.1719 9.09375 20.5781 9.09375 19.5938C9.09375 19.5938 5.8125 20.2969 5.10938 18.1875C5.10938 18.1875 4.59375 16.8281 3.84375 16.5C3.84375 16.5 2.76562 15.75 3.89062 15.75C3.89062 15.75 5.0625 15.8438 5.71875 16.9688C6.75 18.7969 8.4375 18.2812 9.14062 17.9531C9.23438 17.2031 9.51562 16.6875 9.89062 16.3594C7.26562 16.0781 4.59375 15.7031 4.59375 11.2031C4.59375 9.89062 4.96875 9.28125 5.71875 8.4375C5.57812 8.10938 5.20312 6.89062 5.85938 5.25C6.79688 4.96875 9.09375 6.51562 9.09375 6.51562C10.0312 6.23438 11.0156 6.14062 12 6.14062C13.0312 6.14062 14.0156 6.23438 14.9531 6.51562C14.9531 6.51562 17.2031 4.92188 18.1875 5.25C18.8438 6.89062 18.4219 8.10938 18.3281 8.4375C19.0781 9.28125 19.5469 9.89062 19.5469 11.2031C19.5469 15.7031 16.7812 16.0781 14.1562 16.3594C14.5781 16.7344 14.9531 17.4375 14.9531 18.5625C14.9531 20.1094 14.9062 22.0781 14.9062 22.4531C14.9062 22.7812 15.1406 23.1562 15.75 23.0156C20.4375 21.4688 23.625 17.0156 23.625 11.8125C23.625 5.34375 18.3281 0.375 11.8125 0.375ZM4.92188 16.5469C4.82812 16.5938 4.875 16.7344 4.92188 16.8281C5.01562 16.875 5.10938 16.9219 5.20312 16.875C5.25 16.8281 5.25 16.6875 5.15625 16.5938C5.0625 16.5469 4.96875 16.5 4.92188 16.5469ZM4.40625 16.1719C4.35938 16.2656 4.40625 16.3125 4.5 16.3594C4.59375 16.4062 4.6875 16.4062 4.73438 16.3125C4.73438 16.2656 4.6875 16.2188 4.59375 16.1719C4.5 16.125 4.45312 16.125 4.40625 16.1719ZM5.90625 17.8594C5.85938 17.9062 5.85938 18.0469 6 18.1406C6.09375 18.2344 6.23438 18.2812 6.28125 18.1875C6.32812 18.1406 6.32812 18 6.23438 17.9062C6.14062 17.8125 6 17.7656 5.90625 17.8594ZM5.39062 17.1562C5.29688 17.2031 5.29688 17.3438 5.39062 17.4375C5.48438 17.5312 5.57812 17.5781 5.67188 17.5312C5.71875 17.4844 5.71875 17.3438 5.67188 17.25C5.57812 17.1562 5.48438 17.1094 5.39062 17.1562Z"
              fill="#D0D0D0"
            />
          </svg>
        </a>

        <a href="https://stackoverflow.com/users/23249176/johanna-catalini-smith">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 25H9.5V23H19.5V25ZM25.5 13.335L23.879 4L21.886 4.346L23.506 13.681L25.5 13.335ZM19.536 20.272L9.79 19.297L9.604 21.313L19.359 22.192L19.536 20.272ZM20.074 17.685L10.798 15.077L10.272 17.031L19.578 19.531L20.074 17.685ZM21.278 15.272L12.981 10.408L11.952 12.151L20.25 17.016L21.278 15.272ZM23.144 13.805L17.805 5.976L16.133 7.116L21.472 14.945L23.144 13.805ZM20.5 18V26H8.5V18H6.5V28H22.5V18H20.5Z"
              fill="#D0D0D0"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
