import styled from "styled-components";

export const LessonCardStyles = styled.div`
  width: 250px;
  height: 260px;
  min-width: 250px;
  min-height: 260px;
  max-width: 250px;
  max-height: 260px;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;

  .lessonCard__sub__bodyTextSection {
    height: 140px;
    padding: 7px 10px 1px 20px;
    background-color: white;

    .durationWrap {
      svg {
        color: #9d9d9d;
        margin-right: 2px;
        font-size: 10px;
      }
      span {
        color: #9d9d9d;
        font-size: 10px;
      }
    }

    h5 {
      font-size: 13px;
      margin-bottom: 3px;
    }
    .description {
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      color: #979797;
    }

    .subject {
      padding: 11px 12px;
      margin: 10px 10px 0 0;
      background: #a4abe3;
      border-radius: 8px;
      font-size: 7px;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: white;
    }
    .numberOfLessons {
      font-weight: 600;
      font-size: 10px;
      margin-top: 11px;
      color: #ec523b;
    }
    .linkToCourses {
      margin-top: 17px;
      transition: all 0.3s ease;
      :hover {
        text-decoration: underline;
      }
    }
  }

  .lessonCard__sub__videoSection {
    height: 120px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-color: #000000;
    .overlay {
      transform: translateY(-200px);
      background-color: #00000099;
      transition: all 0.3s ease;
      position: absolute;
      top: 0;
    }
    .playWrap {
      background-color: transparent;
      position: relative;
      z-index: 1;

      ::before {
        content: "";
        position: absolute;
        z-index: 0;
        left: 20px;
        top: 20px;

        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 40px;
        height: 40px;
        border: 1px solid #ffffff35;
        transition: all 0.3s ease-in-out;
        border-radius: 50%;
        display: none;
      }
      .playIcon {
        color: white;
        margin: 0 !important;
        padding: 0 !important;
        font-size: 40px;
        transition: all 0.3s ease-in-ou;
      }
    }
  }

  :hover {
    .overlay {
      transform: translateY(0);
    }
    .playWrap {
      ::before {
        animation: lesson-card-pulse-border 1500ms ease-out infinite;
        display: block;
      }
      .playIcon {
        animation: lesson-card-rotate 1s backwards 1;
      }
    }
  }

  @keyframes lesson-card-rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes lesson-card-pulse-border {
    0% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      border: 10px solid #ffffff50;
      width: 50px;
      height: 50px;
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }
`;

export const ClassBox = styled.div`
  padding: 10px 12px;
  margin: 10px 10px 0 0;
  background: ${({ studentClass }) =>
    studentClass === "JUNIOR CLASS" ? "#DCDAFF" : "#FDE9D2"};
  border-radius: 8px;

  .class {
    font-size: 7px;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ studentClass }) =>
      studentClass === "JUNIOR CLASS" ? "#2F2D51" : "#B76100"};
  }
`;
