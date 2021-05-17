
// PROMPTS FOR PICKING DECKS
$(document).ready(() => {
  const shaperFaction = $('.shaperFaction');
  const criminalFaction = $('.criminalFaction');
  const anarchFaction = $('.anarchFaction');
  const miniFaction = $('.miniFaction');

  const shaperInfo = $('.shaperInfo');
  const criminalInfo = $('.criminalInfo');
  const anarchInfo = $('.anarchInfo');
  const miniInfo = $('.miniInfo');

  const pickShaper = $('.pickShaper');
  const pickCriminal = $('.pickCriminal');
  const pickAnarch = $('.pickAnarch');
  const pickMini = $('.pickMini');

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

  // Are you runner or Corp?
  $('.runnerQuestion').click(() => {
    $('.runnerOrCorp').toggleClass('d-none');
    $('.runnerFaction').toggleClass('d-none');
    shaperFaction.removeClass('d-none');
    $('.titleInfo').toggleClass('d-none');
    pressShaperFaction();
  });
  $('.corpQuestion').click(() => {
    console.log('Corp clicked!');
  });

  $('.mainBack').click(() => {
    $('.titleInfo').toggleClass('d-none');
    $('.runnerOrCorp').toggleClass('d-none');
    $('.runnerFaction').addClass('d-none');
    $('.corpFaction').addClass('d-none');
    shaperFaction.addClass('d-none');
    criminalFaction.addClass('d-none');
    anarchFaction.addClass('d-none');
    miniFaction.addClass('d-none');
  });

  pickShaper.click((pressShaperFaction));
  pickCriminal.click((pressCriminalFaction));
  pickAnarch.click((pressAnarchFaction));
  pickMini.click((pressMiniFaction));
});


