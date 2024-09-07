/* Using custom elements to reduce code duplication
    -On re-election change contact links in footer
    -Add links to the hare in the header
*/
const greek_letters = "&#916;&#931;&#934; &#918;&#923;";
const president = "caozz";
const vp = "picotaj";
const rushdick = "prattnr";
const webmaster = "juejw";
const presidentPhoneNumber = "(317)-306-1935";

const pageList = `
  <li><a href="/">Home</a></li>
  <li><a href="brothers.html">Brothers</a></li>
  <li><a href="officers.html">Officers</a></li>
  <li><a href="rush.html">Rush</a></li>
  <li><a href="history.html">History</a></li>
  <li><a href="brotherhood.html">Brotherhood</a></li>
  <li><a href="dogs.html">Dogs</a></li>
  <li><a href="composites.html">Composites</a></li>
`;

const hareList = `
  <li><a href="pdf/hare-spring-2008-2009.pdf">Spring 2008-09</a></li>
  <li><a href="pdf/hare-fall-2009-2010.pdf">Fall 2009-10</a></li>
  <li><a href="pdf/hare-winter-2009-2010.pdf">Winter 2009-10</a></li>
  <li><a href="pdf/hare-spring-2009-2010.pdf">Spring 2009-10</a></li>
  <li><a href="pdf/hare-fall-2010-2011.pdf">Fall 2010-11</a></li>
  <li><a href="pdf/hare-winter-2010-2011.pdf">Winter 2010-11</a></li>
  <li><a href="pdf/hare-spring-2012-2013.pdf">Spring 2012-13</a></li>
  <li><a href="pdf/hare-spring-2013-2014.pdf">Spring 2013-14</a></li>
  <li><a href="pdf/hare-winter-2015-2016.pdf">Winter 2015-16</a></li>
  <li><a href="pdf/hare-winter-2016-2017.pdf">Winter 2016-17</a></li>
  <li><a href="pdf/hare-spring-2016-2017.pdf">Spring 2016-17</a></li>
  <li><a href="pdf/hare-fall-2017-2018.pdf">Fall 2017-18</a></li>
  <li><a href="pdf/hare-winter-2017-2018.pdf">Winter 2017-18</a></li>
  <li><a href="pdf/hare-fall-2018-2019.pdf">Fall 2018-19</a></li>
  <li><a href="pdf/hare-spring-2018-2019.pdf">Spring 2018-19</a></li>
  <li><a href="pdf/hare-fall-2019-2020.pdf">Fall 2019-20</a></li>
  <li><a href="pdf/hare-winter-2019-2020.pdf">Winter 2019-20</a></li>
  <li><a href="pdf/hare-fall-2020-2021.pdf">Fall 2020-21</a></li>
`;


class Header extends HTMLElement {
    connectedCallback() {

      this.innerHTML = `
        <header>
          <ul id="dropdown-hares" class="dropdown-content">
            ${hareList}
          </ul>
          <nav class="green darken-2">
            <div class="nav-wrapper">
              <a href="/" class="brand-logo hide-on-med-and-down" style="">${greek_letters}</a>
              <span class="brand-logo hide-on-large-only center">${greek_letters}</span>
              <a href="" data-activates="mobile-menu" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
              <ul class="right desktop-nav hide-on-med-and-down">
                ${pageList}
                <li><a class="dropdown-button" href="" data-activates="dropdown-hares">Hares Newsletter<i
                      class="mdi-navigation-arrow-drop-down right"></i></a></li>
              </ul>
              <ul class="side-nav" id="mobile-menu">
                ${pageList}
                <ul class="collapsible" data-collapsible="accordion">
                  <li>
                    <div class="collapsible-header green-text text-darken-3">Hares Newsletter<i
                        class="mdi-navigation-arrow-drop-down right"></i></div>
                    <div class="collapsible-body">
                      <ul>
                        ${hareList}
                      </ul>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </nav>
        </header>
      `;
    }
}

class Footer extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l3 m12 s12" style="overflow: hidden;">
            <h4 class="white-text valign">Contact</h4>
            <ul>
              <li><a href="mailto:${president}@rose-hulman.edu" class="green-text text-accent-1">President</a></li>
              <li><a href="mailto:${vp}@rose-hulman.edu" class="green-text text-accent-1">Vice President</a></li>
              <li><a href="mailto:${rushdick}@rose-hulman.edu" class="green-text text-accent-1">Rush Director</a></li>
              <li><a href="mailto:${webmaster}@rose-hulman.edu" class="green-text text-accent-1">Webmaster</a></li>
            </ul>
          </div>
          <div class="col l5 m12 s12">
            <h4 class="white-text valign">Location</h4>
            <div class="col s12" style="height: 300px">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.338023620965!2d-87.41042449999996!3d39.461691699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886d65320ce95333%3A0xa93085f04e4dafce!2s429+S+6th+St%2C+Terre+Haute%2C+IN+47807!5e0!3m2!1sen!2sus!4v1425759548538"
                width="100%" height="100%" frameborder="0" style="border:0"></iframe>
            </div>
          </div>
          <div class="col l3 m12 s12">
            <h4 class="white-text valign">Links</h4>
            <ul>
              <li><a href="http://www.deltasig.org/" class="green-text text-accent-1">Headquarters</a></li>
              <li><a href="http://www.rose-hulman.edu/" class="green-text text-accent-1">Rose-Hulman Institute of
                  Technology</a></li>
              <li><a href="http://www.rose-hulman.edu/student-life/greek-life/intrafraternity-council.aspx"
                  class="green-text text-accent-1">Interfraternity Council</a></li>
              <li><a href="http://www.dspzlalumni.org/" class="green-text text-accent-1">Alumni</a></li>
              <li><a href="http://www.dspzlalumni.org/forums/" class="green-text text-accent-1">Forums</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          &copy; 2021 ${greek_letters} &bull; 429 S. 6<sup>th</sup> St. &bull; Terre Haute, IN 47807 &bull;
          ${presidentPhoneNumber}
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('site-header', Header);
customElements.define('site-footer', Footer);