import React from "react";
import styled, { keyframes } from "styled-components";
import { delay, motion } from "framer-motion";
import { wrapper, Inner } from "../../styledComponents";

// Animation
const shadow = keyframes`
  0% {
    box-shadow: 0px 0px 0px transparent;
  }
  100% {
   box-shadow: 30px -10px 100px rgba(240, 239, 238, 0.8);
  }
`;
// rgba(240, 239, 238, 0.8)
// Style
const Container = styled.section`
  position: relative;
  height: 100vh;
  ${wrapper}
`;
const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bg-light-color);
  overflow: hidden;
`;
const Circle = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  border: 1px solid #f1eee9;
  border-radius: 50%;
  /* animation: ${shadow} 1s ease-in-out both; */
  &:nth-child(1) {
    width: 600px;
    height: 600px;
    animation-delay: 1s;
  }
  &:nth-child(2) {
    width: 1200px;
    height: 1200px;
    animation-delay: 1.5s;
  }
  &:nth-child(3) {
    width: 1700px;
    height: 1700px;
    animation-delay: 2s;
  }
`;
const HomeInner = styled(Inner)`
  position: relative;
  z-index: 1;
`;
const MainElement = styled(motion.div)`
  width: 25%;
  min-width: 300px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const LineElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  min-width: 500px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const TextGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  &.titleGroup {
    position: absolute;
    top: 20%;
    left: 10%;
    h1 {
      font-size: 70px;
      span {
        color: var(--bg-accent-color);
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
      }
    }
    p {
      font-size: 22px;
    }
  }
`;

// Variants
const lineVariants = {
  start: {
    x: -706,
  },
  end: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
const FadeInVariants = {
  start: (coord) => ({
    opacity: 0,
    x: coord?.x || 0,
    y: coord?.y || 0,
  }),
  end: (sec) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: sec?.delay || 0,
      duration: 1,
      ease: "easeOut",
    },
  }),
};
const backgroundVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};
const circleVariants = {
  start: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  end: (size) => ({
    opacity: 1,
    width: size?.width || 0,
    height: size?.height || 0,
    transition: {
      // delay: 1.8,
      duration: 1.5,
      ease: "easeOut",
    },
  }),
  shadow: {
    boxShadow: [
      "0px 0px 0px transparent",
      "30px -10px 100px rgba(240, 239, 238, 0.8)",
      "0px 0px 0px transparent",
    ],
    transition: {
      delay: 1.5, // boxShadow가 시작될 때의 지연 시간
      duration: 2, // boxShadow가 나타나고 사라지는 총 시간
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 8,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const onCircleShadow = (index) => {
    // 'shadow' 애니메이션을 따로 실행
    document.querySelectorAll(".circle")[index]?.animate(circleVariants.shadow);
  };

  return (
    <Container>
      <Background variants={backgroundVariants} initial="start" animate="end">
        <Circle
          custom={{ width: 600, height: 600 }}
          initial="start"
          animate="end"
          variants={circleVariants}
        />
        <Circle
          custom={{ width: 1200, height: 1200 }}
          initial="start"
          animate="end"
          variants={circleVariants}
        />
        <Circle
          custom={{ width: 1700, height: 1700 }}
          initial="start"
          animate="end"
          variants={circleVariants}
        />
      </Background>
      {/* <LineElement>
        <motion.svg
          viewBox="0 0 706 507"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="reveal-mask">
            <motion.rect
              x="0"
              y="0"
              width="706"
              height="507"
              fill="#fff"
              variants={lineVariants}
              initial={"start"}
              animate={"end"}
            />
          </mask>
          <g mask="url(#reveal-mask)">
            <path
              d="M-139.892 -82C-117.669 -46.0125 -60.5082 31.3225 -9.645 52.7621C53.934 79.5616 63.0535 72.3843 98.938 94.1865C128.148 111.933 138.53 134.133 141.276 141.237C145.414 156.061 148.422 189.024 118.513 185.948C98.9775 183.939 99.6709 158.671 111.864 148.185C123.006 138.604 146.282 150.112 167.095 156.673C205.011 168.627 222.663 175.896 242.157 194.16C259.23 210.155 279.456 232.599 292.719 300.49C311.186 395.022 337.827 463.946 420.327 488.5C588.327 538.5 629.403 426 703.403 449.5"
              stroke="#FF481F"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </motion.svg>
      </LineElement>
      <HomeInner>
        <MainElement
          custom={{ x: 0, y: 20 }}
          initial="start"
          animate="end"
          variants={FadeInVariants}
        >
          <svg
            width="332"
            height="306"
            viewBox="0 0 332 306"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150.95 60.4H177.2V272.5C177.2 288.95 173 296.3 161.1 300.5C149.2 304.7 128.9 305.05 98.45 305.05C97.05 297.7 92.5 287.2 88.65 279.85C113.15 280.9 135.55 280.55 142.2 280.2C148.85 279.85 150.95 278.1 150.95 272.15V60.4ZM54.7 1.94998H254.9V25.75H54.7V1.94998ZM246.5 1.94998H253.15L258.75 0.549979L276.95 13.5C250.35 40.45 209.05 67.4 170.9 83.5C167.4 78.25 160.4 70.9 155.85 66.7C189.8 52.7 227.95 27.15 246.5 6.84998V1.94998ZM107.2 101.7H225.5V123.4H107.2V101.7ZM11.3 77.2H89.7V101.35H11.3V77.2ZM100.2 157.35H231.1V179.05H100.2V157.35ZM80.25 214.75H251.4V236.8H80.25V214.75ZM304.25 74.4L324.9 91.55C305.65 113.95 280.1 140.55 260.85 157.7L244.05 143C262.95 125.85 289.2 96.1 304.25 74.4ZM248.6 66.35C260.5 146.15 285.7 218.25 331.2 252.55C324.9 257.8 315.8 267.6 311.25 274.95C263.3 234.35 238.1 158.75 224.45 70.2L248.6 66.35ZM80.25 77.2H85.5L90.4 76.15L106.85 82.45C93.2 170.65 60.65 238.2 20.4 274.6C16.2 269 6.4 259.2 0.45 255.35C39.65 222.1 69.05 160.15 80.25 83.15V77.2Z"
              fill="black"
            />
          </svg>
        </MainElement>
        <TextGroup
          className="titleGroup"
          custom={{ x: -20, y: 0, delay: 0.7 }}
          initial="start"
          animate="end"
          variants={FadeInVariants}
        >
          <h1>
            <span>이을</span> 승
          </h1>
          <p>서로의 이야기를 이어 공감을 쌓아갑니다.</p>
        </TextGroup>
      </HomeInner> */}
    </Container>
  );
};

export default Home;

<path
  fillRule="evenodd"
  clipRule="evenodd"
  d="M-156 80.3014C-156.995 78.6441 -156.458 76.4941 -154.801 75.4992C-153.144 74.5043 -150.994 75.0413 -149.999 76.6986C-120.313 126.15 -56.1825 194.825 20.7479 251.145C97.7351 307.507 186.868 351 266.499 351C306.665 351 334.635 347.073 355.845 340.574C376.988 334.095 391.568 325.014 404.924 314.457C410.783 309.825 416.436 304.875 422.318 299.724L422.323 299.72C443.343 281.312 467.288 260.344 513.997 242.214C563.227 223.105 599.025 221.727 624.696 227.347C643.207 231.4 656.26 239.05 665.141 246.027C665.161 242.171 666.072 238.697 667.875 235.606C669.633 232.416 672.075 229.714 675.2 227.5C678.39 225.287 682.133 223.594 686.43 222.422C690.727 221.185 695.349 220.567 700.297 220.567C704.008 220.567 707.687 220.892 711.333 221.543C715.043 222.194 718.657 223.073 722.172 224.18C725.688 225.287 729.106 226.556 732.426 227.989C735.747 229.356 738.872 230.755 741.801 232.188C742.192 231.016 742.517 229.844 742.778 228.672C743.103 227.5 743.364 226.231 743.559 224.864C743.82 223.431 743.982 221.869 744.047 220.176C744.178 218.418 744.243 216.4 744.243 214.121C744.243 211.973 744.178 209.922 744.047 207.969C743.982 206.016 743.885 203.9 743.754 201.621C743.689 199.278 743.592 196.673 743.461 193.809C743.396 190.879 743.364 187.396 743.364 183.36C743.364 174.05 744.275 165.586 746.098 157.969C747.921 150.287 750.623 143.711 754.204 138.242C757.784 132.774 762.244 128.542 767.583 125.547C772.921 122.487 779.138 120.957 786.235 120.957C790.532 120.957 794.601 121.641 798.442 123.008C802.348 124.375 805.766 126.328 808.696 128.867C811.691 131.407 814.034 134.434 815.727 137.95C817.485 141.465 818.364 145.371 818.364 149.668C818.364 152.012 818.038 154.453 817.387 156.992C816.736 159.532 815.825 161.875 814.653 164.024C813.546 166.107 812.244 167.832 810.747 169.2C809.314 170.567 807.784 171.25 806.157 171.25C805.245 171.25 804.431 170.99 803.715 170.469C802.999 169.948 802.641 169.134 802.641 168.028C802.641 167.246 802.804 166.595 803.129 166.075C803.52 165.489 803.976 164.968 804.497 164.512C806.385 162.819 807.915 160.736 809.086 158.262C810.323 155.788 810.942 152.923 810.942 149.668C810.942 146.413 810.258 143.483 808.891 140.879C807.589 138.21 805.799 135.964 803.52 134.141C801.306 132.253 798.702 130.821 795.708 129.844C792.778 128.802 789.685 128.282 786.43 128.282C780.31 128.282 775.004 129.616 770.512 132.285C766.02 134.955 762.309 138.731 759.379 143.614C756.45 148.431 754.269 154.291 752.836 161.192C751.469 168.028 750.786 175.645 750.786 184.043C750.786 188.08 750.818 191.628 750.883 194.688C751.013 197.748 751.111 200.547 751.176 203.086C751.306 205.625 751.404 208.034 751.469 210.313C751.599 212.526 751.665 214.805 751.665 217.149C751.665 218.516 751.599 220.013 751.469 221.641C751.339 223.203 751.144 224.831 750.883 226.524C750.623 228.151 750.265 229.779 749.809 231.407C749.418 232.969 748.963 234.401 748.442 235.703C753.39 238.308 758.273 241.075 763.09 244.004C767.908 246.934 772.791 249.636 777.739 252.11C782.752 254.519 787.895 256.537 793.168 258.164C798.507 259.727 804.138 260.508 810.063 260.508C815.271 260.508 819.763 259.727 823.54 258.164C827.381 256.602 830.538 254.877 833.012 252.989C835.334 251.203 853.83 234.533 857.929 230.495C858.78 229.232 859.687 228.104 860.649 227.11C862.602 225.026 864.555 223.496 866.508 222.52C868.461 221.478 869.926 220.957 870.903 220.957C872.01 220.957 872.823 221.25 873.344 221.836C873.93 222.422 874.223 223.203 874.223 224.18C874.223 225.287 873.865 226.133 873.149 226.719C872.498 227.24 871.651 227.761 870.61 228.282C869.568 228.802 868.461 229.551 867.29 230.528C866.118 231.439 865.011 232.611 863.969 234.043C862.993 235.476 862.179 237.168 861.528 239.121C860.877 241.075 860.551 243.255 860.551 245.664C860.551 247.813 860.877 249.831 861.528 251.719C862.179 253.542 863.123 255.137 864.36 256.504C865.597 257.806 867.062 258.848 868.754 259.629C870.447 260.345 872.335 260.703 874.418 260.703C878.129 260.703 881.189 259.857 883.598 258.164C886.072 256.407 887.96 254.193 889.262 251.524C885.421 249.505 882.264 246.641 879.79 242.93C877.316 239.219 876.079 235.052 876.079 230.43C876.079 226.719 876.958 223.692 878.715 221.348C880.538 219.004 882.915 217.832 885.844 217.832C887.602 217.832 889.262 218.255 890.825 219.102C892.387 219.948 893.754 221.283 894.926 223.106C896.163 224.929 897.14 227.272 897.856 230.137C898.572 233.002 898.93 236.42 898.93 240.391C898.93 242.474 898.67 244.655 898.149 246.934C898.54 246.999 898.93 247.032 899.321 247.032H900.59C902.804 247.032 904.79 246.771 906.547 246.25C908.305 245.729 909.9 244.948 911.333 243.907C912.765 242.865 914.034 241.53 915.141 239.903C916.313 238.275 917.42 236.387 918.461 234.239C918.657 233.848 919.08 233.49 919.731 233.164C919.83 233.105 919.928 233.05 920.027 233C921.606 229.978 923.493 227.396 925.688 225.254C928.357 222.65 931.287 220.697 934.477 219.395C937.732 218.093 940.857 217.442 943.852 217.442C945.87 217.442 947.726 217.735 949.418 218.321C951.111 218.841 952.543 219.427 953.715 220.078C954.952 220.729 955.896 221.348 956.547 221.934C957.198 222.455 957.557 222.748 957.622 222.813C958.338 223.659 958.696 224.538 958.696 225.45C958.696 226.426 958.338 227.305 957.622 228.086C956.905 228.802 956.059 229.16 955.083 229.16C954.041 229.16 953.162 228.802 952.446 228.086C952.316 227.956 952.023 227.728 951.567 227.403C951.111 227.012 950.493 226.621 949.711 226.231C948.93 225.84 947.986 225.515 946.879 225.254C945.838 224.929 944.633 224.766 943.266 224.766C941.248 224.766 939.099 225.222 936.821 226.133C934.542 227.045 932.459 228.477 930.571 230.43C928.683 232.318 927.088 234.727 925.786 237.657C924.549 240.521 923.93 243.939 923.93 247.91C923.93 249.147 924.06 250.417 924.321 251.719C924.581 252.956 925.037 254.095 925.688 255.137C926.339 256.179 927.218 257.025 928.325 257.676C929.432 258.327 930.799 258.653 932.426 258.653C933.598 258.653 934.933 258.262 936.43 257.481C937.993 256.7 939.458 255.495 940.825 253.867C942.257 252.24 943.526 250.189 944.633 247.715C945.805 245.241 946.619 242.311 947.075 238.926C947.205 238.015 947.628 237.266 948.344 236.68C949.06 236.029 949.907 235.703 950.883 235.703C951.795 235.703 952.576 236.061 953.227 236.778C953.943 237.494 954.334 238.308 954.399 239.219C954.464 240.456 954.594 242.214 954.79 244.492C954.985 246.706 955.408 248.92 956.059 251.133C956.775 253.347 957.817 255.267 959.184 256.895C960.551 258.522 962.439 259.336 964.848 259.336C966.411 259.336 967.941 258.913 969.438 258.067C971 257.22 972.498 256.114 973.93 254.746C975.428 253.314 976.827 251.719 978.129 249.961C979.497 248.138 980.734 246.315 981.84 244.492C982.947 242.67 983.924 240.912 984.77 239.219C985.616 237.526 986.333 236.061 986.918 234.825C987.244 234.108 987.7 233.555 988.286 233.164C988.516 233.026 988.75 232.913 988.988 232.823C990.304 230.301 991.86 228.071 993.657 226.133C996.131 223.399 998.865 221.283 1001.86 219.785C1004.92 218.288 1007.95 217.539 1010.94 217.539C1011.92 217.539 1012.76 217.897 1013.48 218.614C1014.2 219.265 1014.56 220.111 1014.56 221.153C1014.56 222.064 1014.26 222.878 1013.68 223.594C1013.09 224.31 1012.31 224.733 1011.33 224.864C1009.38 225.124 1007.3 225.742 1005.08 226.719C1002.87 227.696 1000.82 229.128 998.93 231.016C997.107 232.839 995.577 235.183 994.34 238.047C993.168 240.912 992.583 244.33 992.583 248.301C992.583 251.556 993.234 254.095 994.536 255.918C995.903 257.741 997.856 258.653 1000.4 258.653C1001.44 258.653 1002.54 258.392 1003.72 257.871C1004.89 257.285 1006.12 256.179 1007.43 254.551C1008.79 252.923 1010.26 250.612 1011.82 247.617C1013.45 244.623 1015.24 240.684 1017.19 235.801C1016.09 230.072 1015.08 223.464 1014.16 215.977C1013.25 208.49 1012.8 200.124 1012.8 190.879C1012.8 186.843 1012.93 182.644 1013.19 178.282C1013.45 173.854 1013.87 169.558 1014.46 165.391C1015.04 161.159 1015.82 157.155 1016.8 153.379C1017.78 149.603 1018.95 146.283 1020.32 143.418C1021.75 140.554 1023.41 138.308 1025.3 136.68C1027.19 134.987 1029.33 134.141 1031.74 134.141C1033.89 134.141 1035.71 134.727 1037.21 135.899C1038.71 137.071 1039.91 138.698 1040.82 140.782C1041.8 142.865 1042.52 145.371 1042.97 148.301C1043.43 151.231 1043.66 154.453 1043.66 157.969C1043.66 165.521 1043.01 173.073 1041.7 180.625C1040.4 188.177 1038.77 195.404 1036.82 202.305C1034.93 209.206 1032.91 215.586 1030.77 221.446C1028.62 227.305 1026.66 232.351 1024.91 236.582C1028.1 251.621 1032.72 259.141 1038.77 259.141C1041.12 259.141 1043.36 258.295 1045.51 256.602C1047.66 254.844 1049.65 252.728 1051.47 250.254C1053.36 247.715 1055.02 245.046 1056.45 242.246C1057.88 239.447 1059.05 237.005 1059.97 234.922C1060.11 234.583 1060.27 234.281 1060.46 234.016C1060.74 228.512 1061.23 223.02 1061.92 217.539C1062.05 216.628 1062.44 215.847 1063.09 215.196C1063.81 214.479 1064.72 214.121 1065.82 214.121C1066.8 214.121 1067.62 214.512 1068.27 215.293C1068.92 216.009 1069.24 216.856 1069.24 217.832C1069.24 218.223 1069.15 219.395 1068.95 221.348C1068.82 223.301 1068.62 225.645 1068.36 228.379C1068.17 231.048 1067.97 233.913 1067.78 236.973C1067.65 239.968 1067.58 242.735 1067.58 245.274C1067.58 248.724 1067.91 251.524 1068.56 253.672C1069.28 255.755 1070.15 257.383 1071.2 258.555C1072.3 259.727 1073.44 260.508 1074.61 260.899C1075.85 261.289 1077.02 261.485 1078.13 261.485C1079.95 261.485 1081.84 260.834 1083.79 259.532C1085.75 258.229 1087.73 256.407 1089.75 254.063C1091.83 251.719 1093.92 248.92 1096 245.664C1097.96 242.542 1099.89 239.103 1101.79 235.348C1101.84 235.177 1101.89 235.003 1101.96 234.825C1104.89 227.858 1107.62 222.748 1110.16 219.492C1112.76 216.172 1115.34 214.512 1117.88 214.512C1119.37 214.512 1120.64 214.903 1121.68 215.684C1122.73 216.4 1123.54 217.377 1124.13 218.614C1124.78 219.851 1125.23 221.218 1125.49 222.715C1125.82 224.213 1125.98 225.742 1125.98 227.305C1125.98 228.477 1125.88 230.3 1125.69 232.774C1125.56 235.248 1125.36 237.917 1125.1 240.782L1124.32 249.18C1124.13 251.979 1123.93 254.323 1123.73 256.211C1124.78 254.063 1125.98 251.719 1127.35 249.18C1128.72 246.576 1130.18 243.972 1131.74 241.367C1133.31 238.698 1134.93 236.061 1136.63 233.457C1138.38 230.853 1140.21 228.379 1142.09 226.035C1143.98 223.757 1145.87 222.129 1147.76 221.153C1149.71 220.111 1151.53 219.59 1153.23 219.59C1156.61 219.59 1159.12 220.827 1160.75 223.301C1162.37 225.775 1163.19 228.835 1163.19 232.481C1163.19 233.327 1163.12 234.369 1162.99 235.606C1162.93 236.778 1162.83 238.047 1162.7 239.414C1162.63 240.782 1162.54 242.181 1162.41 243.614C1162.34 244.981 1162.31 246.283 1162.31 247.52C1162.31 249.082 1162.37 250.58 1162.5 252.012C1162.7 253.444 1163.03 254.714 1163.48 255.821C1163.94 256.862 1164.59 257.709 1165.43 258.36C1166.28 258.946 1167.39 259.239 1168.75 259.239C1171.23 259.239 1173.64 258.295 1175.98 256.407C1178.32 254.453 1180.47 252.175 1182.43 249.571C1184.44 246.901 1186.17 244.2 1187.6 241.465C1189.1 238.731 1190.21 236.517 1190.92 234.825C1191.25 234.108 1191.7 233.555 1192.29 233.164C1192.51 233.031 1192.74 232.921 1192.97 232.833C1194.53 229.883 1196.38 227.356 1198.54 225.254C1201.21 222.65 1204.14 220.697 1207.33 219.395C1210.58 218.093 1213.71 217.442 1216.7 217.442C1218.72 217.442 1220.58 217.702 1222.27 218.223C1223.96 218.744 1225.4 219.33 1226.57 219.981C1227.8 220.632 1228.75 221.25 1229.4 221.836C1230.05 222.422 1230.41 222.748 1230.47 222.813C1231.19 223.594 1231.55 224.473 1231.55 225.45C1231.55 226.426 1231.19 227.305 1230.47 228.086C1229.76 228.802 1228.91 229.16 1227.93 229.16C1227.02 229.16 1226.14 228.802 1225.3 228.086C1225.04 227.891 1224.68 227.63 1224.22 227.305C1223.83 226.914 1223.28 226.524 1222.56 226.133C1221.91 225.742 1221.1 225.417 1220.12 225.157C1219.21 224.896 1218.1 224.766 1216.8 224.766C1214.85 224.766 1212.7 225.222 1210.36 226.133C1208.01 226.979 1205.83 228.347 1203.81 230.235C1201.79 232.123 1200.1 234.564 1198.73 237.559C1197.37 240.489 1196.68 244.037 1196.68 248.203C1196.68 251.328 1197.37 253.867 1198.73 255.821C1200.1 257.709 1202.22 258.653 1205.08 258.653C1206.45 258.653 1207.88 258.262 1209.38 257.481C1210.94 256.7 1212.44 255.495 1213.87 253.867C1215.3 252.24 1216.54 250.189 1217.58 247.715C1218.69 245.241 1219.47 242.311 1219.93 238.926C1220.06 238.015 1220.48 237.266 1221.2 236.68C1221.91 236.029 1222.76 235.703 1223.73 235.703C1224.84 235.703 1225.69 236.094 1226.27 236.875C1226.92 237.657 1227.25 238.535 1227.25 239.512C1227.25 239.577 1227.22 240.586 1227.15 242.539C1227.09 244.427 1227.02 246.966 1226.96 250.157C1226.89 253.347 1226.79 257.058 1226.66 261.289C1226.6 265.456 1226.53 269.883 1226.47 274.571C1238.71 258.62 1247.2 245.371 1251.96 234.825C1252.18 234.332 1252.45 233.933 1252.77 233.625C1272.37 194.759 1309.91 162.431 1354.58 164.5C1371.9 164.508 1385.74 167.03 1397.99 171.773C1410.25 176.518 1420.75 183.421 1431.43 191.953C1438.68 197.752 1446.13 204.404 1454.29 211.683L1454.3 211.695C1458.06 215.047 1461.96 218.531 1466.06 222.126C1479.14 233.597 1494.47 246.401 1514 260.203C1542.04 280.015 1563.37 290.362 1580.46 295.749C1597.49 301.119 1610.46 301.614 1621.96 301.5C1647.84 301.244 1665.02 294.621 1700.62 277.101C1704.5 275.191 1708.6 273.348 1712.61 271.54C1713.73 271.038 1714.84 270.539 1715.93 270.042C1716.48 269.794 1717.02 269.547 1717.56 269.3C1718 269.102 1718.43 268.905 1718.85 268.708C1714.48 264.911 1710.23 260.314 1707.36 255.226C1704.65 250.412 1703.02 244.902 1703.99 239.118C1704.96 233.288 1708.47 227.752 1714.92 222.747C1719.43 219.245 1724.25 217.847 1728.95 218.24C1733.58 218.628 1737.78 220.733 1741.21 223.702C1747.97 229.558 1752.35 239.328 1751.44 248.561C1750.98 253.228 1748.67 257.153 1745.47 260.467C1742.3 263.754 1738.12 266.592 1733.59 269.15C1733.13 269.404 1732.68 269.656 1732.22 269.907C1732.53 270.1 1732.84 270.287 1733.14 270.467C1739.74 273.543 1761.69 281.993 1793.86 274.91C1813.95 270.485 1824.31 265.501 1837.75 258.507C1838.79 257.97 1839.84 257.42 1840.91 256.859C1853.99 250.028 1870.51 241.399 1900.49 229.986C1927.06 219.87 1964.31 219.135 1999.66 222.125C2035.13 225.126 2069.25 231.935 2089.88 237.311C2091.75 237.798 2092.88 239.709 2092.39 241.58C2091.9 243.451 2089.99 244.572 2088.12 244.084C2067.82 238.796 2034.1 232.064 1999.07 229.1C1963.91 226.126 1927.99 227.003 1902.98 236.528C1873.38 247.795 1857.15 256.274 1844.15 263.067C1843.07 263.628 1842.02 264.179 1840.98 264.718C1827.24 271.864 1816.28 277.14 1795.36 281.746C1761.02 289.308 1737.38 280.194 1730.01 276.732L1729.85 276.66L1729.71 276.573C1728.27 275.72 1726.69 274.703 1725.04 273.54C1722.99 274.516 1720.91 275.473 1718.82 276.417C1718.39 276.614 1717.96 276.81 1717.52 277.006L1716.26 277.577L1715.42 277.953L1715.42 277.954C1711.42 279.753 1707.47 281.53 1703.71 283.382C1667.97 300.971 1649.58 308.227 1622.03 308.5C1610.14 308.618 1596.36 308.103 1578.35 302.425C1560.4 296.764 1538.42 286.025 1509.96 265.919C1490.16 251.929 1474.64 238.955 1461.45 227.39C1457.23 223.695 1453.27 220.163 1449.5 216.797L1449.46 216.761L1449.46 216.759L1449.45 216.747C1441.38 209.545 1434.16 203.099 1427.06 197.421C1416.69 189.135 1406.82 182.695 1395.47 178.301C1384.13 173.913 1371.14 171.5 1354.5 171.5L1354.42 171.5L1354.33 171.496C1313.35 169.559 1277.82 199.381 1258.94 236.922C1258.9 237.199 1258.81 237.477 1258.7 237.754C1255.83 244.265 1251.76 251.524 1246.49 259.532C1241.22 267.539 1234.54 276.589 1226.47 286.68C1226.47 290.782 1226.5 294.883 1226.57 298.985C1226.63 303.086 1226.66 307.578 1226.66 312.461C1226.66 317.344 1226.53 322.162 1226.27 326.914C1226.08 331.732 1225.69 336.289 1225.1 340.586C1224.52 344.948 1223.7 348.952 1222.66 352.598C1221.68 356.309 1220.38 359.499 1218.75 362.168C1217.19 364.903 1215.27 367.019 1212.99 368.516C1210.78 370.078 1208.14 370.86 1205.08 370.86C1200.72 370.86 1197.37 369.2 1195.02 365.879C1192.68 362.559 1191.51 357.839 1191.51 351.719C1191.51 348.464 1191.8 344.916 1192.39 341.075C1193.04 337.298 1193.95 333.392 1195.12 329.356C1196.29 325.319 1197.69 321.218 1199.32 317.051C1201.01 312.95 1202.87 308.946 1204.89 305.039C1206.91 301.133 1209.09 297.39 1211.43 293.809C1213.84 290.228 1216.38 286.973 1219.05 284.043C1219.11 279.486 1219.15 274.961 1219.15 270.469C1219.21 265.977 1219.31 261.843 1219.44 258.067C1217.48 260.541 1215.14 262.494 1212.41 263.926C1209.74 265.358 1207.07 266.075 1204.4 266.075C1202.12 266.075 1200.04 265.651 1198.15 264.805C1196.33 263.894 1194.76 262.657 1193.46 261.094C1192.16 259.466 1191.15 257.578 1190.43 255.43C1190.07 254.342 1189.8 253.204 1189.62 252.016C1189.31 252.465 1189 252.919 1188.68 253.379C1186.98 255.723 1185.1 257.871 1183.01 259.825C1180.99 261.778 1178.78 263.405 1176.37 264.707C1174.03 266.009 1171.55 266.66 1168.95 266.66C1166.02 266.66 1163.64 266.107 1161.82 265C1160 263.828 1158.57 262.331 1157.52 260.508C1156.48 258.62 1155.77 256.569 1155.38 254.356C1155.05 252.077 1154.89 249.798 1154.89 247.52C1154.89 246.543 1154.92 245.436 1154.98 244.2C1155.12 242.963 1155.25 241.66 1155.38 240.293C1155.57 238.926 1155.7 237.559 1155.77 236.192C1155.9 234.825 1155.96 233.522 1155.96 232.285C1155.96 230.202 1155.64 228.802 1154.98 228.086C1154.33 227.305 1153.75 226.914 1153.23 226.914C1152.19 226.914 1150.98 227.533 1149.61 228.77C1148.31 229.942 1146.91 231.504 1145.41 233.457C1143.98 235.41 1142.48 237.624 1140.92 240.098C1139.42 242.507 1137.99 244.916 1136.63 247.325C1135.32 249.733 1134.09 252.045 1132.91 254.258C1131.81 256.407 1130.93 258.197 1130.28 259.629C1128.98 262.364 1127.67 264.186 1126.37 265.098C1125.07 266.075 1123.73 266.563 1122.37 266.563C1120.48 266.563 1118.95 266.009 1117.78 264.903C1116.67 263.731 1116.12 262.103 1116.12 260.02C1116.12 259.564 1116.18 258.685 1116.31 257.383C1116.44 256.016 1116.61 254.421 1116.8 252.598C1117 250.71 1117.19 248.692 1117.39 246.543C1117.58 244.395 1117.78 242.279 1117.97 240.196C1118.17 238.047 1118.33 236.061 1118.46 234.239C1118.59 232.416 1118.66 230.886 1118.66 229.649C1118.66 228.021 1118.59 226.459 1118.46 224.961C1118.33 223.464 1118.07 222.552 1117.68 222.227C1117.09 222.422 1116.05 223.659 1114.56 225.938C1113.08 228.117 1111.2 231.967 1108.9 237.489C1108.85 237.63 1108.8 237.763 1108.73 237.889L1108.72 237.911C1108.71 237.937 1108.69 237.961 1108.68 237.986L1108.66 238.023C1108.65 238.043 1108.64 238.063 1108.63 238.083C1107.86 239.555 1106.9 241.333 1105.77 243.418C1104.59 245.567 1103.26 247.78 1101.76 250.059C1100.26 252.338 1098.6 254.616 1096.78 256.895C1095.02 259.108 1093.14 261.127 1091.12 262.95C1089.1 264.707 1086.98 266.14 1084.77 267.246C1082.56 268.353 1080.31 268.907 1078.03 268.907C1075.1 268.907 1072.53 268.288 1070.32 267.051C1068.1 265.814 1066.22 264.154 1064.65 262.071C1063.16 259.987 1062.02 257.546 1061.23 254.746C1060.85 253.209 1060.57 251.615 1060.39 249.966C1059.45 251.462 1058.43 252.99 1057.33 254.551C1055.77 256.765 1054.04 258.75 1052.15 260.508C1050.26 262.266 1048.25 263.731 1046.1 264.903C1044.01 266.009 1041.8 266.563 1039.46 266.563C1035.1 266.563 1031.35 265.065 1028.23 262.071C1025.1 259.011 1022.4 253.998 1020.12 247.032C1017 253.672 1013.84 258.49 1010.65 261.485C1007.46 264.479 1004.01 265.977 1000.3 265.977C998.344 265.977 996.456 265.651 994.633 265C992.81 264.414 991.215 263.405 989.848 261.973C988.481 260.541 987.374 258.718 986.528 256.504C986.05 255.217 985.707 253.774 985.499 252.175C985.199 252.605 984.891 253.039 984.575 253.477C982.882 255.821 980.994 257.969 978.911 259.922C976.827 261.875 974.581 263.503 972.172 264.805C969.764 266.042 967.224 266.66 964.555 266.66C960.779 266.66 957.589 265.456 954.985 263.047C952.446 260.638 950.59 257.611 949.418 253.965C947.205 257.676 944.568 260.638 941.508 262.852C938.448 265 935.389 266.075 932.329 266.075C929.92 266.075 927.739 265.651 925.786 264.805C923.833 263.894 922.172 262.657 920.805 261.094C919.438 259.466 918.364 257.578 917.583 255.43C916.915 253.427 916.558 251.254 916.513 248.911C916.012 249.308 915.49 249.691 914.946 250.059C912.993 251.361 910.779 252.403 908.305 253.184C905.831 253.965 903.064 254.323 900.004 254.258C898.377 254.258 896.944 254.128 895.708 253.867C894.731 255.821 893.559 257.644 892.192 259.336C890.825 260.964 889.23 262.396 887.407 263.633C885.649 264.87 883.663 265.847 881.45 266.563C879.236 267.279 876.827 267.637 874.223 267.637C871.163 267.637 868.364 267.084 865.825 265.977C863.286 264.935 861.072 263.47 859.184 261.582C857.296 259.629 855.831 257.318 854.79 254.649C853.748 251.914 853.227 248.92 853.227 245.664C853.227 245.057 853.243 244.462 853.275 243.878C852.222 244.898 851.171 245.913 850.162 246.889L850.158 246.893C846.282 250.641 843.009 253.806 842.485 254.356C841.183 255.723 839.523 257.22 837.504 258.848C835.551 260.41 833.208 261.875 830.473 263.242C827.804 264.545 824.777 265.651 821.391 266.563C818.006 267.474 814.262 267.93 810.161 267.93C803.78 267.93 797.791 267.116 792.192 265.489C786.593 263.926 781.189 261.908 775.981 259.434C770.838 256.96 765.76 254.226 760.747 251.231C755.734 248.236 750.623 245.306 745.415 242.442C742.224 247.78 738.546 252.142 734.379 255.528C730.278 258.848 725.981 261.452 721.489 263.34C717.062 265.228 712.635 266.498 708.208 267.149C703.846 267.865 699.809 268.223 696.098 268.223C692.517 268.223 688.872 267.832 685.161 267.051C681.515 266.335 678.195 265.13 675.2 263.438C673.332 262.317 671.676 260.985 670.232 259.441C669.684 259.283 669.168 258.989 668.736 258.559C661.247 251.104 647.201 239.441 623.199 234.185C599.17 228.925 564.793 230.006 516.529 248.74C471.072 266.384 448.176 286.419 427.25 304.73L427.248 304.732C421.254 309.978 415.421 315.082 409.265 319.948C395.4 330.908 380.058 340.476 357.896 347.267C335.8 354.037 307.083 358 266.499 358C184.631 358 94.005 313.452 16.6129 256.793C-60.8362 200.093 -125.705 130.768 -156 80.3014ZM738.969 238.828C736.17 237.461 733.208 236.127 730.083 234.825C727.023 233.457 723.865 232.253 720.61 231.211C717.355 230.17 714.002 229.356 710.551 228.77C707.166 228.119 703.78 227.793 700.395 227.793C696.554 227.793 692.941 228.216 689.555 229.063C686.17 229.844 683.208 231.016 680.668 232.578C678.129 234.141 676.111 236.029 674.614 238.242C673.181 240.456 672.465 242.963 672.465 245.762C672.465 248.366 673.116 250.645 674.418 252.598C675.721 254.486 677.446 256.081 679.594 257.383C681.808 258.62 684.347 259.564 687.211 260.215C690.076 260.801 693.071 261.094 696.196 261.094C699.972 261.094 703.878 260.801 707.915 260.215C711.951 259.564 715.857 258.425 719.633 256.797C723.409 255.104 726.958 252.826 730.278 249.961C733.598 247.032 736.495 243.321 738.969 238.828ZM1036.14 152.598C1036.27 154.486 1036.33 156.244 1036.33 157.871C1036.33 163.47 1035.94 169.102 1035.16 174.766C1034.44 180.365 1033.44 185.931 1032.13 191.465C1030.9 196.999 1029.43 202.435 1027.74 207.774C1026.05 213.047 1024.26 218.19 1022.37 223.203C1021.78 218.711 1021.26 213.601 1020.81 207.871C1020.35 202.142 1020.12 196.413 1020.12 190.684C1020.12 184.694 1020.41 178.77 1021 172.91C1021.65 166.986 1022.5 161.713 1023.54 157.09C1024.58 152.403 1025.79 148.627 1027.15 145.762C1028.59 142.897 1030.12 141.465 1031.74 141.465C1032.72 141.465 1033.5 142.019 1034.09 143.125C1034.67 144.232 1035.13 145.632 1035.45 147.325C1035.84 148.952 1036.07 150.71 1036.14 152.598ZM1725.79 265.372C1727.3 264.609 1728.76 263.837 1730.15 263.052C1734.43 260.638 1737.94 258.191 1740.43 255.608C1742.9 253.052 1744.22 250.523 1744.48 247.878C1745.14 241.106 1741.83 233.5 1736.62 228.993C1734.07 226.78 1731.22 225.455 1728.36 225.216C1725.56 224.981 1722.45 225.757 1719.21 228.276C1713.78 232.492 1711.5 236.591 1710.89 240.271C1710.27 243.997 1711.25 247.874 1713.46 251.786C1716.35 256.904 1721.08 261.636 1725.79 265.372ZM1219.05 295.957C1215.99 300.189 1213.22 304.779 1210.75 309.727C1208.27 314.74 1206.16 319.785 1204.4 324.864C1202.64 329.942 1201.27 334.857 1200.3 339.61C1199.39 344.427 1198.93 348.724 1198.93 352.5C1198.93 354.909 1199.13 356.83 1199.52 358.262C1199.97 359.694 1200.49 360.801 1201.08 361.582C1201.73 362.364 1202.41 362.884 1203.13 363.145C1203.91 363.405 1204.63 363.535 1205.28 363.535C1207.3 363.535 1209.05 362.722 1210.55 361.094C1212.05 359.466 1213.32 357.285 1214.36 354.551C1215.4 351.882 1216.25 348.789 1216.9 345.274C1217.55 341.758 1218.04 338.112 1218.36 334.336C1218.69 330.625 1218.92 326.914 1219.05 323.203C1219.18 319.492 1219.24 316.075 1219.24 312.95V304.551C1219.24 301.752 1219.18 298.887 1219.05 295.957ZM1075.98 188.34C1075.98 190.814 1075.1 192.93 1073.34 194.688C1071.65 196.381 1069.57 197.227 1067.09 197.227C1064.62 197.227 1062.5 196.381 1060.75 194.688C1059.05 192.93 1058.21 190.814 1058.21 188.34C1058.21 187.103 1058.44 185.964 1058.89 184.922C1059.35 183.815 1059.97 182.871 1060.75 182.09C1061.59 181.244 1062.54 180.593 1063.58 180.137C1064.69 179.681 1065.86 179.453 1067.09 179.453C1068.33 179.453 1069.47 179.681 1070.51 180.137C1071.62 180.593 1072.56 181.244 1073.34 182.09C1074.19 182.871 1074.84 183.815 1075.3 184.922C1075.75 185.964 1075.98 187.103 1075.98 188.34ZM1070.51 188.34C1070.51 187.429 1070.15 186.647 1069.44 185.996C1068.79 185.28 1068.01 184.922 1067.09 184.922C1066.18 184.922 1065.4 185.28 1064.75 185.996C1064.1 186.647 1063.77 187.429 1063.77 188.34C1063.77 189.252 1064.1 190.033 1064.75 190.684C1065.4 191.335 1066.18 191.66 1067.09 191.66C1068.01 191.66 1068.79 191.335 1069.44 190.684C1070.15 190.033 1070.51 189.252 1070.51 188.34ZM883.793 233.555C883.468 232.188 883.305 230.886 883.305 229.649C883.305 227.696 883.631 226.426 884.282 225.84C884.933 225.254 885.454 224.961 885.844 224.961C886.821 224.961 887.667 225.45 888.383 226.426C889.099 227.338 889.685 228.575 890.141 230.137C890.662 231.634 891.053 233.295 891.313 235.117C891.573 236.94 891.704 238.731 891.704 240.489C891.704 241.791 891.606 243.125 891.411 244.492C890.043 243.646 888.839 242.637 887.797 241.465C886.821 240.228 885.974 238.959 885.258 237.657C884.607 236.289 884.119 234.922 883.793 233.555Z"
  fill="#FF481F"
/>;
