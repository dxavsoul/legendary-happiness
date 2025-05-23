"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,  AvatarGroup,
  SmartLink,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  useToast,
  Card,
  Fade,
  TiltFx,
  IconButton,
  Column,
  Row,
  StyleOverlay,
  User,
  Badge,
  Grid,
  GlitchFx,
} from "@/once-ui/components";
import Brain from "./brain/brain";
import ContactForm from "./contact_form/contact_form";

export default function Home() {
   const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row horizontal="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          {/* <Logo size="m" icon={false} href="https://once-ui.com" /> */}
          <Brain />
          <Row gap="12" hide="m">
            <Button
              href="https://x.com/dxavsoul"
              prefixIcon="x"
              size="s"
              label="X"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://github.com/dxavsoul"
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://www.linkedin.com/in/mxsarmiento"
              prefixIcon="linkedin"
              size="s"
              label="LinkedIn"
              weight="default"
              variant="tertiary"
            />
            <Row position="fixed" top="20" right="20">
              <StyleOverlay position="fixed" top="8" right="8" style={{height: "calc(100vh - var(--static-space-16))"}} />
            </Row>
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="https://discord.com/invite/5EyAQ4eNdS"
              icon="discord"
              variant="tertiary"
            />
            <IconButton
              href="https://github.com/once-ui-system/nextjs-starter"
              icon="github"
              variant="tertiary"
            />
            <Row position="fixed" top="20" right="20">
              <StyleOverlay position="fixed" top="8" right="8" style={{height: "calc(100vh - var(--static-space-16))"}} />
            </Row>
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <TiltFx>
              <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
                Milton X Sarmiento
              </Heading>
            </TiltFx>
            <User
              name="Milton X Sarmiento"
              subline="Software Engineer"
              tagProps={{
                label: 'Pro',
                variant: 'brand'
              }}
              avatarProps={{
                empty: false,
                src: '/images/xavier.jpg',
                size:"xl"
              }}
            />
            <Heading marginBottom="12" as="h2" align="justify" variant="heading-default-l">
              20+ years of experience in systems design and development, implementation and support of technical projects and programs
              Excel at strategic planning, building high-performance teams, multiple projects management, vendor management, best-practice methodologies implementation, and continuous improvement programs
              Expert in developing scalable and sustainable processes and tools to drive the efficiency, output and integrity of the data for financial decision-making
              Led and coordinated cross-functional activities between diverse teams (Software Developers, Quality Assurance, Managing and Legal) deployed in global projects
              Leveraged areas of expertise where I teach about them to deliver high-quality results and enhance app satisfaction
              Motivated by the challenge of creating value for clients, and product owners, while adhering to the highest standards of ethics and compliance.
              A self-starter and problem-solver who is passionate about the power of data and the next cutting-edge technologies.
            </Heading>
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              Resume 
              <br />
              <SmartLink href="resume/resume.pdf" suffixIcon="download" prefix="S" target="_black" > Milton X Sarmiento Resume</SmartLink>      
            </InlineCode>
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
              <AvatarGroup
                marginBottom="8"
                reverse
                size="s"
                avatars={[
                  {
                    src: "/images/l.jpg",
                  },
                  {
                    src: "/images/z.jpg",
                  },
                ]}
              />
              <Heading marginBottom="12" as="h2" align="center" variant="heading-default-l">
                Where I worked or collab
                <br /> Projects :
              </Heading>
              <LogoCloud
                columns="2"
                mobileColumns="1"
                limit={2}
                fillWidth
                logos={[
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/concierge.png",
                    href: "https://conciergerealtypartners.com",
                    size: "xl",
                  },
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/avwar.png",
                    href: "https://avwarrealty.com",
                    size: "xl",
                  },
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/ylift.png",
                    href: "https://ylift.app",
                    size: "xl",
                  },
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/clean.png",
                    href: "https://cleanandshine.com",
                    size: "xl",
                  },
                ]}
              />
            </Column>
          </Column>
          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">
            <Heading as="h2" variant="display-default-m">
              Skills
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              Tiny snippets to inspire your next project
            </Text>
            <Grid columns={3} mobileColumns={1} tabletColumns={2} gap="16" paddingX="16" paddingY="8">
              {/* Frontend */}
              <Card
                maxWidth={24}
                radius="l-4"
                direction="column"
                marginRight="20"
              >
                <Column
                  fillWidth
                  paddingX="20"
                  paddingY="24"
                  gap="8"
                >
                  <Text variant="body-default-xl">
                    Frontend
                  </Text>
                  <Badge
                    arrow
                    effect
                  >
                    HTML
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Javascript
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Next.js
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    NodeJS
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    React
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Flutter
                  </Badge>
                </Column>
                <Line background="neutral-alpha-medium" />
              </Card>
              {/* Backend */}             
              <Card
                maxWidth={30}
                radius="l-4"
                direction="column"
                marginRight="20"
              >
                <Column
                  fillWidth
                  paddingX="20"
                  paddingY="24"
                  gap="8"
                >
                  <Text variant="body-default-xl">
                    Backend
                  </Text>
                  <Badge
                    arrow
                    effect
                  >
                    Java
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    C#.Net
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    .Net Core
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    NodeJS
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Dart
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    PHP
                  </Badge>
                </Column>
                <Line background="neutral-alpha-medium" />
              </Card>
              {/* Database */}
              <Card
                maxWidth={24}
                radius="l-4"
                direction="column"
                marginRight="20"
              >
                <Column
                  fillWidth
                  paddingX="20"
                  paddingY="24"
                  gap="8"
                >
                  <Text variant="body-default-xl">
                    Database
                  </Text>
                  <Badge
                    arrow
                    effect
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    SQL Server
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Oracle
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    MySQL
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Firebase/Firestore
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    MongoDB
                  </Badge>
                </Column>
                <Line background="neutral-alpha-medium" />
                
              </Card>
              {/* DevOps */}
              <Card
                maxWidth={24}
                radius="l-4"
                direction="column"
                marginRight="20"
              >
                <Column
                  fillWidth
                  paddingX="20"
                  paddingY="24"
                  gap="8"
                >
                  <Text variant="body-default-xl">
                    DevOps
                  </Text>
                  <Badge
                    arrow
                    effect
                  >
                    Git
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Docker
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    CI/CD
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    AWS
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Azure
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Linux
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    MacOS
                  </Badge>
                </Column>
                <Line background="neutral-alpha-medium" />
              </Card>
              {/* Other Skills */}
              <Card
                maxWidth={24}
                radius="l-4"
                direction="column"
              >
                <Column
                  fillWidth
                  paddingX="20"
                  paddingY="24"
                  gap="8"
                >
                  <Text variant="body-default-xl">
                    Other Skills
                  </Text>
                  <Badge
                    arrow
                    effect
                  >
                    Agile / Scrum Methodology
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Odoo
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    SSRS
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    Jira
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    SOAP 
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    RESTfull
                  </Badge>
                  <Badge
                    arrow
                    effect
                  >
                    RabbitMQ
                  </Badge>
                </Column>
                <Line background="neutral-alpha-medium" />
              </Card>
            </Grid>
            {/* Contact Form */}
            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-weak"
              overflow="hidden"
            >
              <Row fill hide="m">
                <GlitchFx fillWidth speed="medium">
                  <SmartImage src="/images/yolo.png" aspectRatio="16/9" alt="YOLO" objectFit="cover" />
                </GlitchFx>
              </Row>
              <Column fillWidth horizontal="center" gap="20" padding="32" position="relative">
                <Background
                  mask={{
                    x: 100,
                    y: 0,
                    radius: 75,
                  }}
                  position="absolute"
                  grid={{
                    display: true,
                    opacity: 50,
                    width: "0.5rem",
                    color: "neutral-alpha-medium",
                    height: "1rem",
                  }}
                />
                <Logo wordmark={false} size="l" />
                <Heading as="h3" variant="display-default-s" align="center">
                  Get In Touch
                </Heading>
                <Text onBackground="neutral-medium" marginBottom="24">
                  Contact 
                  <SmartLink href="/">Information</SmartLink>
                </Text>
                <Column fillWidth gap="8">
                  <Button
                    label="Google Profile"
                    fillWidth
                    variant="secondary"
                    weight="default"
                    prefixIcon="google"
                    size="l"
                    href="https://g.dev/dxavsoul"
                  />
                  <Button
                    label="GitHub Profile"
                    fillWidth
                    variant="secondary"
                    weight="default"
                    prefixIcon="github"
                    size="l"
                    href="https://github.com/dxavsoul"
                  />
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>

        {/* BOOKING */}
        <Row
          padding="32"
          fillWidth
          gap="64"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
          <Background
            fill
            position="absolute"
            gradient={{
              display: true,
              opacity: 60,
              tilt: 0,
              height: 100,
              width: 100,
              x: 50,
              y: 0,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column
            fillWidth
            background="surface"
            radius="xl"
            border="neutral-medium"
            overflow="hidden"
            padding="32"
            gap="40"
            position="relative"
          >
            <Row fillWidth horizontal="center">
              <ContactForm />
            </Row>
          </Column>
        </Row>
        
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
            suppressHydrationWarning={true}
          >
            <Logo wordmark={false} size="s" />
            <Text size="m">
              <Text onBackground="neutral-weak">{new Date().getFullYear()} /</Text> Once UI / Brain Solutions LLC
            </Text>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}