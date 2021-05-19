
// PROMPTS FOR PICKING DECKS
$(document).ready(() => {
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
  const runnerOrCorp = $('.runnerOrCorp');
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
    pickShaper.addClass('bg-success').addClass('text-white');
    pickCriminal.removeClass('bg-info').removeClass('text-white');
    pickAnarch.removeClass('bg-danger').removeClass('text-white');
    pickMini.removeClass('bg-warning').removeClass('text-white');
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
    pickShaper.removeClass('bg-success').removeClass('text-white');
    pickCriminal.addClass('bg-info').addClass('text-white');
    pickAnarch.removeClass('bg-danger').removeClass('text-white');
    pickMini.removeClass('bg-warning').removeClass('text-white');
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
    pickShaper.removeClass('bg-success').removeClass('text-white');
    pickCriminal.removeClass('bg-info').removeClass('text-white');
    pickAnarch.addClass('bg-danger').addClass('text-white');
    pickMini.removeClass('bg-warning').removeClass('text-white');
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
    pickShaper.removeClass('bg-success').removeClass('text-white');
    pickCriminal.removeClass('bg-info').removeClass('text-white');
    pickAnarch.removeClass('bg-danger').removeClass('text-white');
    pickMini.addClass('bg-warning').addClass('text-white');
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
    hbButton.addClass('pickHB').addClass('text-white');
    jintekiButton.removeClass('pickJinteki').removeClass('text-white');
    weylandButton.removeClass('pickWeyland').removeClass('text-white');
    nbnButton.removeClass('pickNBN').removeClass('text-white');
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
    hbButton.removeClass('pickHB').removeClass('text-white');
    jintekiButton.addClass('pickJinteki').addClass('text-white');
    weylandButton.removeClass('pickWeyland').removeClass('text-white');
    nbnButton.removeClass('pickNBN').removeClass('text-white');
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
    hbButton.removeClass('pickHB').removeClass('text-white');
    jintekiButton.removeClass('pickJinteki').removeClass('text-white');
    weylandButton.addClass('pickWeyland').addClass('text-white');
    nbnButton.removeClass('pickNBN').removeClass('text-white');
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
    hbButton.removeClass('pickHB').removeClass('text-white');
    jintekiButton.removeClass('pickJinteki').removeClass('text-white');
    weylandButton.removeClass('pickWeyland').removeClass('text-white');
    nbnButton.addClass('pickNBN').addClass('text-white');
    // Displays the NBN Corporations
    hbFaction.addClass('d-none');
    jintekiFaction.addClass('d-none');
    weylandFaction.addClass('d-none');
    nbnFaction.removeClass('d-none');
  };

  // Are you runner or Corp?
  runnerQuestion.click(() => {
    runnerOrCorp.addClass('d-none');
    runnerFaction.removeClass('d-none');
    shaperFaction.removeClass('d-none');
    titleInfo.addClass('d-none');
    pressShaperFaction();
  });

  corpQuestion.click(() => {
    runnerOrCorp.addClass('d-none');
    corpFaction.removeClass('d-none');
    hbFaction.removeClass('d-none');
    titleInfo.addClass('d-none');
    pressHBFaction();
  });

  $('.mainBack').click(() => {
    titleInfo.toggleClass('d-none');
    runnerOrCorp.toggleClass('d-none');
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


