"use client";

import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { useLanguage } from "@/components/LanguageProvider";

export default function CollaboratePage() {
  const { language } = useLanguage();
  return (
    <>
      <section className="py-12 bg-accent-50/50">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "zh" ? "合作" : "Collaborate"}
          </h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h2 className="text-xl font-semibold mb-3">
                {language === "zh"
                  ? "高校与研究机构"
                  : "Universities & Research Institutes"}
              </h2>
              {language === "zh" ? (
                <p>
                  欢迎与高校伙伴在食品科学、自动化与AI交叉领域开展开源软硬件合作。
                </p>
              ) : (
                <div className="space-y-4">
                  <p>
                    I collaborate with universities and research institutes to
                    develop open-source software and hardware at the
                    intersection of food science, automation, and artificial
                    intelligence. My current research interests include
                    developing predictive models for guiding pilot and
                    industrial-scale production, robotic and sensor-based
                    characterization of foods, and deep-learning methods for
                    spectroscopic data.
                  </p>
                  <p>
                    If you are a student or researcher interested in working
                    together, I am happy to discuss opportunities through the
                    Marie Skłodowska-Curie Postdoctoral Fellowship, other
                    personal grants, or jointly developed research proposals.
                    Other funded PhD positions will be posted on{" "}
                    <a
                      className="font-medium text-accent-700 underline hover:text-accent-900"
                      href="https://www.wur.nl/en/jobs/jobs-wageningen-university-research?professional_field=PhD%7CPhD+%26+EngD"
                    >
                      Wageningen University &amp; Research&apos;s vacancy page
                    </a>
                    .
                  </p>
                </div>
              )}
            </Card>
            <Card>
              <h2 className="text-xl font-semibold mb-3">
                {language === "zh"
                  ? "企业与商业伙伴"
                  : "Companies & Commercial Partners"}
              </h2>
              {language === "zh" ? (
                <p>
                  我与企业合作，将研究转化为可部署的食品开发、加工与质量控制解决方案。
                </p>
              ) : (
                <div className="space-y-4">
                  <p>
                    I work with companies and other commercial partners to
                    translate research into practical, deployable solutions.
                    Collaborations can range from exploratory research and
                    proof-of-concept studies to the development and validation
                    of digital tools for real production environments.
                  </p>
                  <p>
                    I welcome opportunities to co-supervise internship and
                    thesis projects, apply our software and digital tools in
                    contract research, evaluate new sensing and automation
                    technologies, and develop joint research projects around
                    specific industrial challenges.
                  </p>
                  <p>
                    Please feel free to get{" "}
                    <a
                      className="font-medium text-accent-700 underline hover:text-accent-900"
                      href="https://www.wur.nl/en/persons/y-yizhou-ma-phd"
                    >
                      in touch
                    </a>{" "}
                    if you would like to explore a collaboration or discuss a
                    research question where food science, sensing, automation,
                    or AI could contribute.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
