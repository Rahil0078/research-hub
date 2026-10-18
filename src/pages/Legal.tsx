import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";

export const Privacy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy & Scholar Confidentiality Pledge | Research Hub"
        description="Our commitment to 100% academic confidentiality, data security, and non-disclosure protocols."
        url="/privacy"
      />
      <div className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1
              className="text-3xl sm:text-4xl font-bold text-slate-950"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Privacy Policy & Confidentiality Pledge
            </h1>
            <p className="text-xs text-slate-400">
              Last Updated: October 2026
            </p>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 font-serif">
                1. Academic Non-Disclosure & Data Security
              </h2>
              <p>
                Research Hub maintains an ironclad commitment to academic confidentiality. Any research proposals, datasets, thesis chapters, statistical scripts, or personal details shared with us remain the strict property of the scholar. We do not sell, license, publish, or store client files in public or institutional repositories.
              </p>

              <h2 className="text-xl font-bold text-slate-900 font-serif">
                2. Non-Repository Plagiarism Scanning
              </h2>
              <p>
                All similarity checks and originality assessments are conducted using certified "No-Repository" instructor accounts. Your manuscripts are checked against global databases without being indexed or stored in Turnitin or iThenticate repositories.
              </p>

              <h2 className="text-xl font-bold text-slate-900 font-serif">
                3. Information We Collect
              </h2>
              <p>
                We collect your name, email, phone number, and academic discipline solely for the purpose of communicating research plans, quotations, and delivering consultation feedback.
              </p>

              <h2 className="text-xl font-bold text-slate-900 font-serif">
                4. Contact for Privacy Inquiries
              </h2>
              <p>
                For questions regarding data retention or to request an explicit Non-Disclosure Agreement (NDA), please email us at <strong className="text-slate-900">researchhub147@gmail.com</strong>.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service & Academic Code of Ethics | Research Hub"
        description="Terms of service and academic integrity guidelines for Research Hub consultation."
        url="/terms"
      />
      <div className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1
              className="text-3xl sm:text-4xl font-bold text-slate-950"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Terms of Service & Academic Code of Ethics
            </h1>
            <p className="text-xs text-slate-400">
              Last Updated: October 2026
            </p>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 font-serif">
                1. Educational Mentorship & Consultation
              </h2>
              <p>
                Research Hub operates as an academic consultancy providing research guidance, statistical analysis, literature synthesis assistance, proofreading, and editorial support. Our services are designed to assist scholars in understanding methodologies, improving scholarly writing, and navigating peer review.
              </p>

              <h2 className="text-xl font-bold text-slate-900 font-serif">
                2. Academic Integrity & Scholar Responsibility
              </h2>
              <p>
                Scholars are responsible for verifying compliance with their respective universities' academic honesty policies, citation styles, and submission guidelines.
              </p>

              <h2 className="text-xl font-bold text-slate-900 font-serif">
                3. Revision Guarantee
              </h2>
              <p>
                We provide milestone-based iterations. If your supervisor or institutional review committee requests modifications within the originally agreed project scope, our team will incorporate the revisions without additional charges.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Privacy;
