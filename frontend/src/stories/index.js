import React from "react";

import { storiesOf } from "@storybook/react";

import ThemeWrapper from "../components/ThemeWrapper";
import Input, { InputAdornment } from "../components/Form/Input";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/fontawesome-pro-light";
import theme from "../theme";
import Autocomplete from "../components/Form/Autocomplete";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import CardEditor from "../components/Card/CardEditor";
import CardSummary from "../components/Card/CardSummary";
import QuestionsChart from "../components/Chart/QuestionsChart";
import Stream from "../components/Stream/Stream";
import { DateTime } from "luxon";
import Tag from "../components/Card/Tag";
import StreamLoader from "../components/Stream/StreamLoader";
import Question, {
  CONDITION_BEHIND,
  CONDITION_STAGE,
  STATUS_ANSWERING,
  STATUS_RIGHT_ANSWER,
  STATUS_WRONG_ANSWER
} from "../components/Question/Question";
import { withKnobs, boolean } from "@storybook/addon-knobs";

storiesOf("Card", module)
  .addDecorator(story => <ThemeWrapper>{story()}</ThemeWrapper>)
  .add("creation", () => (
    <CardEditor
      mode="creation"
      selectableLabelsOptions={[
        { label: "histoire", value: "histoire" },
        { label: "géographie", value: "géographie" },
        { label: "musique", value: "musique" },
        { label: "cinéma", value: "cinéma" }
      ]}
    />
  ))
  .add("edition", () => (
    <CardEditor
      mode="edition"
      question="En quelle année a eu lieu la bataille de Marignan ?"
      response="1515"
      labels={[{ label: "histoire", value: "histoire" }]}
      selectableLabelsOptions={[
        { label: "histoire", value: "histoire" },
        { label: "géographie", value: "géographie" },
        { label: "musique", value: "musique" },
        { label: "cinéma", value: "cinéma" }
      ]}
    />
  ))
  .add("summary", () => (
    <CardSummary
      question="En quelle année a eu lieu la bataille de Marignan ?"
      response="1515"
      labels={[{ name: "histoire" }]}
    />
  ));

storiesOf("Input", module)
  .addDecorator(story => <ThemeWrapper>{story()}</ThemeWrapper>)
  .add("default", () => (
    <Input
      startAdornment={
        <InputAdornment position="start">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            color={theme.colors.primary}
            size="xs"
          />
        </InputAdornment>
      }
      value="Test"
    />
  ))
  .add("autocomplete", () => (
    <Autocomplete
      startAdornment={
        <InputAdornment position="start">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            color={theme.colors.primary}
            size="xs"
          />
        </InputAdornment>
      }
      value="Test"
    />
  ));

storiesOf("Button", module)
  .addDecorator(story => <ThemeWrapper>{story()}</ThemeWrapper>)
  .add("default", () => <Button>Add Question</Button>);

storiesOf("Tag", module)
  .addDecorator(story => <ThemeWrapper>{story()}</ThemeWrapper>)
  .add("default", () => <Tag>histoire</Tag>);

storiesOf("Chart", module)
  .addDecorator(story => <ThemeWrapper>{story()}</ThemeWrapper>)
  .add("questions", () => {
    const dates = [...Array(30).keys()].reverse().map(numberOfDays => {
      return DateTime.local()
        .minus({ days: numberOfDays })
        .valueOf();
    });

    const data = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      15,
      35,
      13,
      25,
      26,
      16,
      37,
      57,
      0,
      34,
      24,
      14,
      36,
      24,
      34,
      0,
      2,
      0,
      35,
      46,
      24
    ].map((value, index) => ({
      x: dates[index],
      y: value
    }));

    return (
      <div style={{ background: theme.colors.dark }}>
        <QuestionsChart series={[{ data }]} />
      </div>
    );
  });

storiesOf("Stream", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <ThemeWrapper>{story()}</ThemeWrapper>)
  .add("default", () => (
    <React.Fragment>
      <StreamLoader loading={boolean("Loading", false)} />
    </React.Fragment>
  ));

storiesOf("Question", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <ThemeWrapper>{story()}</ThemeWrapper>)
  .add("answering", () => (
    <React.Fragment>
      <Question
        number={1}
        question="En quelle année a eu lieu la bataille de Marignan ?"
        status={
          boolean("Answering", true) ? STATUS_ANSWERING : STATUS_RIGHT_ANSWER
        }
        condition={
          boolean("Staging", true) ? CONDITION_STAGE : CONDITION_BEHIND
        }
      />
    </React.Fragment>
  ))
  .add("right answer", () => (
    <React.Fragment>
      <Question
        number={1}
        question="En quelle année a eu lieu la bataille de Marignan ?"
        status={STATUS_RIGHT_ANSWER}
      />
    </React.Fragment>
  ))
  .add("wrong answer", () => (
    <React.Fragment>
      <Question
        number={1}
        question="En quelle année a eu lieu la bataille de Marignan ?"
        answer={"1515"}
        status={STATUS_WRONG_ANSWER}
      />
    </React.Fragment>
  ));
