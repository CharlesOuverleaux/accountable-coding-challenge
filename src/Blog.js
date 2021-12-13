import './Blog.css';

function Blog() {
  return (
    <div className="App">
      <div className="blogpost-content">
        <div className="container-stickybanner">
          <div className="stickybanner">
            <p>Receive 3 tax tips to start optimizing your taxes!</p>
            <form action="" method="post" class="sticky-banner-form">
              <input type="email" placeholder="Your email address" required />
              <div class="sticky-banner-button">
                <input type="submit" value="Subscribe!" />
              </div>
            </form>
          </div>
        </div>
        <div className="container container--blog">
          <div className="breadcrumbs">
            <p id="breadcrumbs">
              <span>
                <span>
                  <a href="https://www.accountable.eu/">Home</a> »
                  <span>
                    <a href="https://www.accountable.eu/blog/">
                      Practical Guides
                    </a>
                    »
                    <span className="breadcrumb_last" aria-current="page">
                      Copyrights revenue for Belgian freelancers
                    </span>
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="container container--blog">
          <h1 className="section-h2 blogpost-h1">
            Copyrights revenue for Belgian freelancers
          </h1>
          <div className="read-in">
            Updated on <time datetime="2021-06-02">June 2, 2021</time>
            <br />
            Read in
            <span className="span-reading-time rt-reading-time">
              <span className="rt-time"> 6 </span>
              <span className="rt-label rt-postfix">minutes</span>
            </span>
          </div>
        </div>

        <div className="container container--blog">
          <div className="articlepiece">
            <p>
              <em>
                You are software developer, marketeer, creative, writer,
                translator, or you simply produce original artistic or literary
                material. You heard about copyrights and how those might help
                you lower your taxes?
              </em>
            </p>
            <p>
              <em>
                This article is made for you: in the next 1000 words, we will
                cover what copyrights are, how they are taxed and how concretely
                you can invoice with copyright. A concrete simple guide that
                might call for in-depth discussions, naturally. In which case,
                we’d be happy to help through the in-app support.
              </em>
            </p>
            <p>
              <em>
                In 2021, we have never seen more need to help you optimise your
                taxes.
                <br />
                Here is a short piece to help you do so.{" "}
              </em>
              <em>
                Let’s go
                <img
                  draggable="false"
                  className="emoji"
                  alt="⤵️"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/2935.svg"
                />
              </em>
            </p>
            <h2>
              Tax gains for copyrights: from 50% to 15%…or even lower
              <img
                draggable="false"
                className="emoji"
                alt="💪"
                src="https://s.w.org/images/core/emoji/13.1.0/svg/1f4aa.svg"
              />
            </h2>
            <p>
              It’s simple: copyright income is taxed at a flat rate of 15%. This
              tax rate is further reduced by the application of flat-rate
              charges (charges forfaitaires): 50% on income up to €16.560 per
              year (1st bracket) and 25% for the revenue from this number up to
              €33.110 (2nd bracket).
            </p>
            <p>
              Concretely, the first €16.560 received by a copyright author
              during a year is therefore taxed at a rate of 7.5% and the
              following €16.560 is taxed at 11.25%. This is a far cry from the
              marginal rate applied to professional income, which can rise above
              50% (when social security contributions are taken into account).
            </p>
            <p>
              Attention, this regime is applicable up to €62.090 of copyright
              income received per year (2021 figures). For the surplus, you can
              safely consider it will be taxed as professional income.
            </p>
            <h2>Am I eligible for copyrights in Belgium?</h2>
            <p>
              It’s both simple and…complex: there are eligibility criteria
              relative to you, as a person, and to your work, the type of good
              or services you provide. Let’s look at those quickly.
            </p>
            <h3>
              <img
                draggable="false"
                className="emoji"
                alt="💁‍♂️"
                src="https://s.w.org/images/core/emoji/13.1.0/svg/1f481-200d-2642-fe0f.svg"
              />
              Conditions linked to You
            </h3>
            <p>
              Special taxation for copyrights is only applicable as such to
              <strong>natural persons</strong>(<em>personnes physiques</em> or{" "}
              <em>eenmanszaken</em>). When harvested by limited companies,
              revenue from creative work are not accounted for separately.
            </p>
            <h3>
              <img
                draggable="false"
                className="emoji"
                alt="✏️"
                src="https://s.w.org/images/core/emoji/13.1.0/svg/270f.svg"
              />
              Conditions linked to your Work
            </h3>
            <p>
              In order to benefit from reduced taxation, two elements are
              required: a work protected by copyright (yes…) and an income that
              is derived from the transfer or license of copyright. This seems
              obvious, but be careful you understand those concepts properly,
              risks are real.
            </p>
            <p>
              The income must be related to a work protected by copyright
              <em>(droit d’auteur /</em> <em>auteursrecht</em>) as set out in
              Book 11, title 5 of the
              <a
                href="http://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=nl&amp;la=N&amp;cn=2013022819&amp;table_name=wet"
                target="_blank"
                rel="noreferrer"
              >
                Belgian Code of Economic Law
              </a>
              . The law refers to “literary and artistic works” but these
              concepts must be understood broadly. Thus, software, certain
              databases, 3D designs or technical and scientific literature can
              be protected.
            </p>
            <p>
              To be protected by copyright, a work must exist in a concrete form
              (read: it cannot be just a concept or an idea) and must be
              original, i.e. “bear the imprint of the author’s personality”.
              Originality is a complex and widely discussed notion in copyright
              law… a topic to be left to lawyers, probably.
            </p>
            <p>
              No other conditions apply. In particular, a work does not need to
              be deposited or registered, or be accompanied by certain mentions,
              to be protected.
            </p>
            <p>
              Then, copyright (the right to reproduce, modify and communicate
              the work) must be transferred or licensed to a person, and only
              the price paid for such transfer or license may be qualified as
              “copyright income”.
            </p>
            <h2>Risks involved (must read)</h2>
            <p>
              Copyright revenue are a favorite for tax auditors.
              <br />
              Expect a strong welcome at your next tax audit.
              <br />
              Part of the game, some will say.
            </p>
            <p>
              The following criteria have been mentioned as important when tax
              authorities are assessing the validity of copyright revenue:
            </p>
            <ul>
              <li>the author’s field(s) of activity and specialty(ies);</li>
              <li>
                the organisation of his work, his relations with the possible
                copyright payer;
              </li>
              <li>
                the method of remuneration applied and the criteria used to
                determine it;
              </li>
              <li>
                the possible reimbursement of expenses incurred by the author.
              </li>
            </ul>
            <p>
              In practice, tax authorities tend to always require that transfers
              or licenses of copyright are established in written contracts
              respecting certain forms, in particular with regard to the
              remuneration of authors.
            </p>
            <p>
              Failure to comply with these formalities may lead to the rejection
              of the application of this favorable tax regime, be warned.
            </p>
            <h3>
              How to determine the part of the revenue that can be considered as
              copyright revenue?
            </h3>
            <p>
              Probably the trickiest part in your copyright revenue setup when
              you are hired to create works and to transfer the resulting
              copyright: estimating how much should be invoiced as copyright on
              your bill? 100%? Less?
            </p>
            <p>
              Actually, looking at it as percentage of a total amount is a
              general misconception. There is no part of the revenue considered
              as copyright revenue as such : the copyright amount on your
              invoice is the amount that represents the transfer of copyrights
              to your client. It is NOT the time spent on creative work.
            </p>
            <p>
              As a consequence, there is no rule of thumb, no generally
              applicable rule to assess how much revenue should be put in
              copyright revenue. It could be 100%, it could be 1%. Numerous
              rulings from tax authorities have been published on the topic,
              providing an indication of how the Administration looks at those
              numbers.
            </p>
            <p>
              That said, we naturally advise you to discuss the matter with a
              certified tax advisor, or even better, a specialised lawyer. To
              get the situation under complete control, we also definitely
              recommend looking at solutions such as
              <a
                href="https://www.creativeshelter.be/freelancers/zo-werkt-creative-shelter/?utm_source=Blogpost&amp;utm_medium=blog&amp;utm_campaign=Accountable&amp;utm_content=partner%20link"
                target="_blank"
                rel="noreferrer"
              >
                Creative Shelter
              </a>
              , a Belgian company we admire.
            </p>
            <h3>Which VAT rates apply for copyright revenue?</h3>
            <p>
              The VAT rate for operations for transfer of copyrights is
              determined according to the rules set in art. 18, § 1st, 7° of the
              Belgian VAT code. In most cases,{" "}
              <strong>it will be 6% or 21%</strong>, depending on the type of
              work rendered.
            </p>
            <p>For software, for instance, it’s most often 21%.</p>
            <p>For illustrations &amp; drawings, generally 6%.</p>
            <p>For edition work, often 0%.</p>
            <p>
              Don’t hesitate to contact us if you’re unsure about the VAT rate
              to apply.
            </p>
            <h3>
              I heard my client needs to pay withholding taxes immediately on
              copyright revenue. Is it true? How important is it for me?
            </h3>
            <p>
              True. Your client needs to pre-pay your taxes on this copyright
              revenue. That’s the purpose of the withholding tax. Yes, your
              client pre-pays your tax, you heard properly.
            </p>
            <p>
              From your client perspective, it means that the cost of the
              invoice will consist of
            </p>
            <ul>
              <li>Your fee (paid to you)</li>
              <li>The copyright assignment (paid to you)</li>
              <li>The withholding tax (paid to the Administration)</li>
            </ul>
            <p>
              That is why some will say the withholding tax is deducted from the
              total amount to pay. A question of point of view.
            </p>
            <p>
              <strong>How much should the withholding tax be?</strong>
            </p>
            <p>
              Simple: it’s the amount of taxes you should pay on the copyright
              revenue: thus 7.5% or 11.25% of the copyright revenue amount set
              on the invoice, depending on how much copyright you invoiced this
              year so far (see above).
            </p>
            <p>
              <strong>Are there other obligations for my client?</strong>
            </p>
            <p>
              Yes: they also need to register this withholding tax on a
              <a
                href="https://financien.belgium.be/nl/E-services/roerende-voorheffing"
                target="_blank"
                rel="noreferrer"
              >
                specific platform
              </a>
              . The platform provides them with wiring instruction as well.
              Failure in doing will put them at risk in case of an audit.
            </p>
            <p>
              <strong>
                What happens if my client does not pay this withholding tax?
              </strong>
            </p>
            <p>
              You will need to pay the tax at the end of the year. When your
              client pays your withholding tax, they also register the tax (see
              above), which means that those withholding taxes will
              automatically appear on your income tax statement on TaxOnWeb. If
              they don’t appear there, it means they probably did not pay them,
              which means you will need to pay.
            </p>
            <p>
              Bear in mind that withholdings paid by your clients are advance
              payments in any case; your final taxes will be calculated based on
              the full amount received during the year and you will have to pay
              the difference at that point. Fair game.
            </p>
            <h2>
              Check-list to start invoicing with copyrights
              <img
                draggable="false"
                className="emoji"
                alt="✅"
                src="https://s.w.org/images/core/emoji/13.1.0/svg/2705.svg"
              />
            </h2>
            <p>
              Ready? Let’s summarise what you need to start invoicing with
              copyrights in Belgium:
            </p>
            <ul>
              <li>
                A clear understanding of what are copyrights and whether or not
                your work is eligible
              </li>
              <li>
                A good idea of the % of your work that qualifies as copyright
              </li>
              <li>
                A written contract with your client(s), specifying a transfer or
                license of copyright and a related price
              </li>
            </ul>
            <p>On the invoice, you will absolutely need to include:</p>
            <ul>
              <li>
                A clear indication of the articles that are copyrights (e.g.
                “Assignment of copyright”, “Toekenning auteursrecht”,
                “Attribution des droits d’auteur”)
              </li>
              <li>Their relative VAT rate (0%, 6% or 21%)</li>
            </ul>
            <p>
              Additionally, you can (but are not obliged to) mention the amount
              of the withholding tax that your client will need to pay. Your
              client needs to pay this withholding tax, so it’s better (for good
              business relationships) if you mention it clearly on the invoice.
            </p>
            <h2>How it works in Accountable</h2>
            <p>
              It works seamlessly in Accountable
              <img
                draggable="false"
                className="emoji"
                alt="💛"
                src="https://s.w.org/images/core/emoji/13.1.0/svg/1f49b.svg"
              />
              :
            </p>
            <ul>
              <li>
                Your create your invoice with the right items corresponding to
                your (creative and non-creative) work
              </li>
              <li>
                You add an item for copyrights at the correct VAT rate and name
                it
                <em>Assignment of copyright</em>,
                <em> Toekenning auteursrecht </em>or
                <em> Attribution des droits d’auteur</em>
              </li>
              <li>
                In the comments, you add the amount of withholding tax your
                client needs to pay. See above to learn more about how to
                compute this amount.
              </li>
            </ul>
            <p>Doing so, your VAT returns will be 100% correct.</p>
            <p>
              Over the course of 2021, we will enable you to categorise the
              revenue under “copyrights” to make sure your income tax
              computations are also correct.
            </p>
            <p>Off you go, dear.</p>
            <p>
              If you have any question, don’t hesitate to reach out in the app,
              in the Support tab
            </p>
          </div>
        </div>

        <div className="section author">
          <div className="container container--blog container--author">
            <img
              src="https://www.accountable.eu/wp-content/themes/accountable/assets/images/authors/Francois_Nicolas.jpg"
              className="img-fluid author-profile-picture"
              alt="François Coppens, Lawyer in Brussels &amp; Nicolas Quarré, co-founder Accountable"
            />

            <div className="author-title">
              François Coppens, Lawyer in Brussels &amp; Nicolas Quarré,
              co-founder Accountable
            </div>
            <p className="">
              François write with Nicolas about startups, contracts, computer
              law and intellectual property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
