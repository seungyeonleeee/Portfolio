import React from "react";
import styled from "styled-components";
import { wrapper, Inner } from "../../styledComponents";

const Container = styled.section`
  ${wrapper}
  height: 630px;
  position: relative;
  background: var(--bg-beige-color);
  .copyright {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--bg-dark-gray);
    font: normal 12px/1 "Poppins-Regular";
  }
`;
const ContactInner = styled(Inner)`
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  position: relative;
  h5 {
    height: 150px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font: 300 100px/150px "Poppins-Light";
    color: var(--bg-accent-color);
  }
  ul {
    li {
      font: normal 18px/1 "Poppins-Regular";
      margin: 5px 0;
    }
  }
`;
const LineElement = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
const Contact = () => {
  return (
    <Container>
      <LineElement>
        <svg
          width="772"
          height="155"
          viewBox="0 0 772 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 122.5C58 122.5 68.5605 95.5012 115 106.5C216.5 130.539 198.626 107.147 267.5 94C443 60.5 570 184 617 144.5C664 105 621.486 15.5 667.5 15.5C712 15.5 639.5 141.5 689 148C716.89 151.662 748.434 75.0512 770.057 2"
            stroke="#FF481F"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M52.3962 92.8001C52.3962 94.6655 52.356 96.1684 52.2755 97.3088C52.2396 97.8171 51.8108 98.2001 51.3012 98.2001H6.32403C5.76102 98.2001 5.30746 98.6652 5.33891 99.2274C5.58613 103.646 6.6386 107.404 8.49628 110.5C10.4963 113.833 13.1296 116.333 16.3962 118C19.3794 119.522 22.6128 120.349 26.0963 120.481C26.6482 120.502 27.0963 120.948 27.0963 121.5V123.4C27.0963 123.952 26.6483 124.402 26.0962 124.385C21.4312 124.245 17.2313 123.117 13.4963 121C9.49628 118.733 6.36292 115.5 4.09625 111.3C1.82959 107.033 0.696289 102.067 0.696289 96.4001C0.696289 90.7334 1.79628 85.8001 3.99628 81.6001C6.26294 77.4001 9.39624 74.2001 13.3962 72.0001C17.3962 69.7334 21.9629 68.6001 27.0963 68.6001C32.2963 68.6001 36.7963 69.7334 40.5963 72.0001C44.4629 74.2001 47.3962 77.1668 49.3962 80.9001C51.3962 84.5668 52.3962 88.5334 52.3962 92.8001ZM46.937 94.5001C47.4731 94.5001 47.9157 94.077 47.9221 93.541C47.9748 89.1561 47.0995 85.4091 45.2963 82.3001C43.4296 78.9668 40.8629 76.5001 37.5963 74.9001C34.3296 73.2334 30.7963 72.4001 26.9963 72.4001C23.1963 72.4001 19.6629 73.2334 16.3962 74.9001C13.1962 76.5001 10.5629 78.9668 8.49628 82.3001C6.6406 85.3929 5.5884 89.117 5.33971 93.4725C5.3076 94.0347 5.76127 94.5001 6.32443 94.5001H46.937Z"
            fill="#FF481F"
          />
        </svg>
      </LineElement>
      <ContactInner>
        <h5>Please Contact M</h5>

        <ul>
          <li>syyy0.02@gmail.com</li>
          <li>github.com/seungyeonleeee</li>
        </ul>
        <p className="copyright">© 2024 SeungYeon Lee. All Right Reserved</p>
      </ContactInner>
    </Container>
  );
};

export default Contact;
