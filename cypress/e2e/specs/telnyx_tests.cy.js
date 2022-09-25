import 'cypress-if';
import contactUsPage from '../pages/contact-us.page';
import generalPage from '../pages/general.page';
import { makeEmail, makeLogin, makePass, makePNumb } from '../pages/generators.page';
import partnershipPage from '../pages/partnership.page';
import signInPage from '../pages/sign-in.page';
import signUpPage from '../pages/sign-up.page';
import waitlistPage from '../pages/waitlist.page';

describe('Functional testing of Telnyx.com  ', () => {

  it ('1. Should test registration procedure', () => {
    signUpPage.visitPage()
    generalPage.cookieAccept()
    signUpPage.emailField.type(makeEmail())
    signUpPage.nameField.type('Tony Mahoney')
    signUpPage.passField.type(makePass(11))
    signUpPage.termsAccept.click()
    signUpPage.submitClick()
  })

  it ('2. Should log in using not existing account', () => {
    signInPage.visitPage()
    generalPage.cookieAccept()
    signInPage.emailField.type(makeEmail())
    signInPage.passField.type(makePass())
    signInPage.submitClick()
  })

  it ('3. Should transfer to Telnyx main page from "Sign in page" using logo', () => {
    signInPage.visitPage()
    generalPage.cookieAccept()
    signInPage.logoClick()
  })

  it ('4. Should transfer to Telnyx main page from "Sign up page" using logo', () => {
    signUpPage.visitPage()
    generalPage.cookieAccept()
    signUpPage.logoClick()
  })

  it ('5. Should request to talk with expert for Legal reason', () => {
    contactUsPage.visitPage()
    generalPage.cookieAccept()
    contactUsPage.reasonDDMenu.select(3)
    contactUsPage.frstNameField.type('Tony')
    contactUsPage.lstNameFeild.type('Mahoney')
    contactUsPage.emailField.type(makeEmail())
    contactUsPage.phoneCountry.select(104)
    contactUsPage.phoneBase.type(makePNumb())
    contactUsPage.webSiteField.type(`http://www.${makeLogin(6)}.com/`)
    contactUsPage.addInfoField.type('this is a test')
    contactUsPage.submitClick()
    })

  it ('6. Should request to talk with expert for Support reason', () => {
    contactUsPage.visitPage()
    generalPage.cookieAccept()
    contactUsPage.reasonDDMenu.select(2)
    contactUsPage.frstNameField.type('Tony')
    contactUsPage.lstNameFeild.type('Mahoney')
    contactUsPage.emailField.type(makeEmail())
    contactUsPage.phoneCountry.select(104)
    contactUsPage.phoneBase.type(makePNumb())
    contactUsPage.webSiteField.type(`http://www.${makeLogin(6)}.com/`)
    contactUsPage.addInfoField.type('this is a test')
    contactUsPage.submitClick()
    })
  
  it ('7. Should request to talk with expert for Sales enquiry reason', () => {
    contactUsPage.visitPage()
    generalPage.cookieAccept()
    contactUsPage.reasonDDMenu.select(1)
    contactUsPage.frstNameField.type('Tony')
    contactUsPage.lstNameFeild.type('Mahoney')
    contactUsPage.emailField.type(makeEmail())
    contactUsPage.phoneCountry.select(104)
    contactUsPage.phoneBase.type(makePNumb())
    contactUsPage.webSiteField.type(`http://www.${makeLogin(6)}.com/`)
    contactUsPage.primInt.select(9)
    contactUsPage.addInfoField.type('this is a test')
    contactUsPage.submitClick()
    })

  it ('8. Should pass "Registration to the storage waitlist" procedure', () => {
    waitlistPage.visitPage()
    generalPage.cookieAccept()
    waitlistPage.frstNameField.type('Tony')
    waitlistPage.lstNameFeild.type('Mahoney')
    waitlistPage.emailField.type(makeEmail())
    waitlistPage.addInfoField.type('this is a test')
    waitlistPage.submitClick()
  })

  it ('9. Should pass "Become a Telnyx technology Partner" procedure', () => {
    partnershipPage.visitPage()
    generalPage.cookieAccept()
    partnershipPage.frstNameField.type('Tony')
    partnershipPage.lstNameFeild.type('Mahoney')
    partnershipPage.companyFeild.type(`${makeLogin(5)}.Ltd`)
    partnershipPage.emailField.type(makeEmail())
    partnershipPage.phoneNmbr.type(`+380${makePNumb()}`)
    partnershipPage.prtnrType.select(5)
    partnershipPage.addInfoField.type('this is a test')
    partnershipPage.submitClick()
  })

  it ('10. Should pass "Become a Telnyx System Integrator Partner" procedure', () => {
    partnershipPage.visitPage()
    generalPage.cookieAccept()
    partnershipPage.frstNameField.type('Tony')
    partnershipPage.lstNameFeild.type('Mahoney')
    partnershipPage.companyFeild.type(`${makeLogin(5)}.Ltd`)
    partnershipPage.emailField.type(makeEmail())
    partnershipPage.phoneNmbr.type(`+380${makePNumb()}`)
    partnershipPage.prtnrType.select(4)
    partnershipPage.addInfoField.type('this is a test')
    partnershipPage.submitClick()
  })
})