import { Heading } from "@spark-web/heading";
import { Stack } from "@spark-web/stack";
import { Text } from "@spark-web/text";
import { TextList } from "@spark-web/text-list";
import { TextLink } from "@spark-web/text-link";

export default function Index() {
  return (
    <Stack gap="large" padding="large">
      <Heading level="1">Welcome to Remix</Heading>
      <TextList>
        <Text>
          <TextLink
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </TextLink>
        </Text>
        <Text>
          <TextLink
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </TextLink>
        </Text>
        <Text>
          <TextLink
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </TextLink>
        </Text>
      </TextList>
    </Stack>
  );
}
