// PROMPTS FOR PICKING DECKS
$(document).ready(() => {
  const body = $('.body');
  const runnerButtonR = $('#runnerButtonR');
  const corpButtonR = $('#corpButtonR');
  const runnerButtonC = $('#runnerButtonC');
  const corpButtonC = $('#corpButtonC');
  // ALL RUNNER FACTION
  const runnerFaction = $('.runnerFaction');
  const shaperFaction = $('.shaperFaction');
  const criminalFaction = $('.criminalFaction');
  const anarchFaction = $('.anarchFaction');
  const miniFaction = $('.miniFaction');

  // ALL FACTION INFO
  const titleInfo = $('.titleInfo');
  const shaperInfo = $('.shaperInfo');
  const criminalInfo = $('.criminalInfo');
  const anarchInfo = $('.anarchInfo');
  const miniInfo = $('.miniInfo');

  // ALL RUNNER PICKING
  const pickShaper = $('.pickShaper');
  const pickCriminal = $('.pickCriminal');
  const pickAnarch = $('.pickAnarch');
  const pickMini = $('.pickMini');

  // QUESTIONS
  const jackIn = $('#jackIn');
  const runnerQuestion = $('.runnerQuestion');
  const corpQuestion = $('.corpQuestion');

  // ALL CORP FACTION
  const corpFaction = $('.corpFaction');
  const hbFaction = $('.hbFaction');
  const jintekiFaction = $('.jintekiFaction');
  const weylandFaction = $('.weylandFaction');
  const nbnFaction = $('.nbnFaction');

  // ALL CORP BUTTONS FOR COLORS
  const hbButton = $('.hbButton');
  const jintekiButton = $('.jintekiButton');
  const weylandButton = $('.weylandButton');
  const nbnButton = $('.nbnButton');

  // ALL CORP INFO
  const hbInfo = $('.hbInfo');
  const jintekiInfo = $('.jintekiInfo');
  const weylandInfo = $('.weylandInfo');
  const nbnInfo = $('.nbnInfo');

  // ALL CORP PICKING
  const pickHB = $('.pickHB');
  const pickJinteki = $('.pickJinteki');
  const pickWeyland = $('.pickWeyland');
  const pickNBN = $('.pickNBN');

  function pressShaperFaction() {
    // Show Shaper
    shaperInfo.removeClass('d-none');
    criminalInfo.addClass('d-none');
    anarchInfo.addClass('d-none');
    miniInfo.addClass('d-none');
    // Highlights Shaper Button
    pickShaper.addClass('shaperSelect');
    pickCriminal.removeClass('criminalSelect');
    pickAnarch.removeClass('anarchSelect');
    pickMini.removeClass('miniSelect');
    // Displays the Shaper Runners
    shaperFaction.removeClass('d-none');
    criminalFaction.addClass('d-none');
    anarchFaction.addClass('d-none');
    miniFaction.addClass('d-none');
  };

  function pressCriminalFaction() {
    // Show Criminal
    shaperInfo.addClass('d-none');
    criminalInfo.removeClass('d-none');
    anarchInfo.addClass('d-none');
    miniInfo.addClass('d-none');
    // Highlights Criminal Button
    pickShaper.removeClass('shaperSelect');
    pickCriminal.addClass('criminalSelect');
    pickAnarch.removeClass('anarchSelect');
    pickMini.removeClass('miniSelect');
    // Displays the Criminal Runners
    shaperFaction.addClass('d-none');
    criminalFaction.removeClass('d-none');
    anarchFaction.addClass('d-none');
    miniFaction.addClass('d-none');
  };

  function pressAnarchFaction() {
    // Show Anarch
    shaperInfo.addClass('d-none');
    criminalInfo.addClass('d-none');
    anarchInfo.removeClass('d-none');
    miniInfo.addClass('d-none');
    // Highlights Anarch Button
    pickShaper.removeClass('shaperSelect');
    pickCriminal.removeClass('criminalSelect');
    pickAnarch.addClass('anarchSelect');
    pickMini.removeClass('miniSelect');
    // Displays the Anarch Runners
    shaperFaction.addClass('d-none');
    criminalFaction.addClass('d-none');
    anarchFaction.removeClass('d-none');
    miniFaction.addClass('d-none');
  };

  function pressMiniFaction() {
    // Show Mini-Factions
    shaperInfo.addClass('d-none');
    criminalInfo.addClass('d-none');
    anarchInfo.addClass('d-none');
    miniInfo.removeClass('d-none');
    // Highlights Mini-Factions Button
    pickShaper.removeClass('shaperSelect');
    pickCriminal.removeClass('criminalSelect');
    pickAnarch.removeClass('anarchSelect');
    pickMini.addClass('miniSelect');
    // Displays the Mini-Faction Runners
    shaperFaction.addClass('d-none');
    criminalFaction.addClass('d-none');
    anarchFaction.addClass('d-none');
    miniFaction.removeClass('d-none');
  };

  function pressHBFaction() {
    // Show HB
    hbInfo.removeClass('d-none');
    jintekiInfo.addClass('d-none');
    weylandInfo.addClass('d-none');
    nbnInfo.addClass('d-none');
    // Highlights HB Button
    hbButton.addClass('pickHB');
    jintekiButton.removeClass('pickJinteki');
    weylandButton.removeClass('pickWeyland');
    nbnButton.removeClass('pickNBN');
    // Displays the HB Corporations
    hbFaction.removeClass('d-none');
    jintekiFaction.addClass('d-none');
    weylandFaction.addClass('d-none');
    nbnFaction.addClass('d-none');
  };

  function pressJintekiFaction() {
    // Show Jinteki
    hbInfo.addClass('d-none');
    jintekiInfo.removeClass('d-none');
    weylandInfo.addClass('d-none');
    nbnInfo.addClass('d-none');
    // Highlights Jinteki Button
    hbButton.removeClass('pickHB');
    jintekiButton.addClass('pickJinteki');
    weylandButton.removeClass('pickWeyland');
    nbnButton.removeClass('pickNBN');
    // Displays the Jinteki Corporations
    hbFaction.addClass('d-none');
    jintekiFaction.removeClass('d-none');
    weylandFaction.addClass('d-none');
    nbnFaction.addClass('d-none');
  };

  function pressWeylandFaction() {
    // Show Weyland
    hbInfo.addClass('d-none');
    jintekiInfo.addClass('d-none');
    weylandInfo.removeClass('d-none');
    nbnInfo.addClass('d-none');
    // Highlights Weyland Button
    hbButton.removeClass('pickHB');
    jintekiButton.removeClass('pickJinteki');
    weylandButton.addClass('pickWeyland');
    nbnButton.removeClass('pickNBN');
    // Displays the Weyland Corporations
    hbFaction.addClass('d-none');
    jintekiFaction.addClass('d-none');
    weylandFaction.removeClass('d-none');
    nbnFaction.addClass('d-none');
  };

  function pressNBNFaction() {
    // Show NBN
    hbInfo.addClass('d-none');
    jintekiInfo.addClass('d-none');
    weylandInfo.addClass('d-none');
    nbnInfo.removeClass('d-none');
    // Highlights NBN Button
    hbButton.removeClass('pickHB');
    jintekiButton.removeClass('pickJinteki');
    weylandButton.removeClass('pickWeyland');
    nbnButton.addClass('pickNBN');
    // Displays the NBN Corporations
    hbFaction.addClass('d-none');
    jintekiFaction.addClass('d-none');
    weylandFaction.addClass('d-none');
    nbnFaction.removeClass('d-none');
  };

  jackIn.click(() => {
    titleInfo.addClass('d-none');
    body.addClass('bodyFade');
    runnerFaction.removeClass('d-none');
    runnerButtonR.addClass('runnerSelect');
    corpFaction.addClass('d-none');
    corpButtonR.removeClass('corpSelect');
    shaperFaction.removeClass('d-none');
    pressShaperFaction();
  });

  // Are you runner or Corp?
  runnerQuestion.click(() => {
    runnerFaction.removeClass('d-none');
    runnerButtonR.addClass('runnerSelect');
    corpFaction.addClass('d-none');
    corpButtonR.removeClass('corpSelect');
    shaperFaction.removeClass('d-none');
    criminalFaction.addClass('d-none');
    anarchFaction.addClass('d-none');
    miniFaction.addClass('d-none');
    hbFaction.addClass('d-none');
    jintekiFaction.addClass('d-none');
    weylandFaction.addClass('d-none');
    nbnFaction.addClass('d-none');
    pressShaperFaction();
  });

  corpQuestion.click(() => {
    runnerFaction.addClass('d-none');
    runnerButtonC.removeClass('runnerSelect');
    corpFaction.removeClass('d-none');
    corpButtonC.addClass('corpSelect');
    shaperFaction.addClass('d-none');
    criminalFaction.addClass('d-none');
    anarchFaction.addClass('d-none');
    miniFaction.addClass('d-none');
    hbFaction.removeClass('d-none');
    jintekiFaction.addClass('d-none');
    weylandFaction.addClass('d-none');
    nbnFaction.addClass('d-none');
    pressHBFaction();
  });

  $('.mainBack').click(() => {
    titleInfo.toggleClass('d-none');
    body.removeClass('bodyFade');
    body.addClass('bodyHome');
    runnerFaction.addClass('d-none');
    corpFaction.addClass('d-none');
    shaperFaction.addClass('d-none');
    criminalFaction.addClass('d-none');
    anarchFaction.addClass('d-none');
    miniFaction.addClass('d-none');
    hbFaction.addClass('d-none');
    jintekiFaction.addClass('d-none');
    weylandFaction.addClass('d-none');
    nbnFaction.addClass('d-none');
  });

  pickShaper.click((pressShaperFaction));
  pickCriminal.click((pressCriminalFaction));
  pickAnarch.click((pressAnarchFaction));
  pickMini.click((pressMiniFaction));

  hbButton.click((pressHBFaction));
  jintekiButton.click((pressJintekiFaction));
  weylandButton.click((pressWeylandFaction));
  nbnButton.click((pressNBNFaction));


});


