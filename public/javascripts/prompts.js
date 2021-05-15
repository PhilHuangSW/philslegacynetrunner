
// PROMPTS FOR PICKING DECKS
$(document).ready(() => {
  // Are you runner or Corp?
  $('.runnerQuestion').click(() => {
    $('.runnerOrCorp').toggleClass('d-none');
    $('.runnerFaction').toggleClass('d-none');
    $('.titleInfo').toggleClass('d-none');
  });
  $('.corpQuestion').click(() => {
    console.log('Corp clicked!');
  });

  // Shaper, Criminal, Anarch, or Mini-Faction?
  $('.shaperQuestion').click(() => {
    $('.shaperQuestion').toggleClass('active');
    $('.criminalQuestion').removeClass('active');
    $('.anarchQuestion').removeClass('active');
    $('.criminalQuestion').addClass('btn-outline-info');
    $('.criminalQuestion').removeClass('btn-info');
    $('.anarchQuestion').addClass('btn-outline-danger');
    $('.anarchQuestion').removeClass('btn-danger');
  });
  $('.criminalQuestion').click(() => {
    $('.shaperQuestion').removeClass('active');
    $('.criminalQuestion').toggleClass('active');
    $('.anarchQuestion').removeClass('active');
    $('.shaperQuestion').addClass('btn-outline-success');
    $('.shaperQuestion').removeClass('btn-success');
    $('.anarchQuestion').addClass('btn-outline-danger');
    $('.anarchQuestion').removeClass('btn-danger');
  });
  $('.anarchQuestion').click(() => {
    $('.shaperQuestion').removeClass('active');
    $('.criminalQuestion').removeClass('active');
    $('.anarchQuestion').toggleClass('active');
    $('.shaperQuestion').addClass('btn-outline-success');
    $('.shaperQuestion').removeClass('btn-success');
    $('.criminalQuestion').addClass('btn-outline-info');
    $('.criminalQuestion').removeClass('btn-info');
  });

  $('.mainBack').click(() => {
    $('.titleInfo').toggleClass('d-none');
    $('.runnerOrCorp').toggleClass('d-none');
    $('.runnerFaction').addClass('d-none');
    $('.corpFaction').addClass('d-none');
  });

  $('.pickShaper').click(() => {
    $('.shaperInfo').removeClass('d-none');
    $('.criminalInfo').addClass('d-none');
    $('.anarchInfo').addClass('d-none');
    $('.pickShaper').addClass('bg-success').addClass('text-white');
    $('.pickCriminal').removeClass('bg-info').removeClass('text-white');
    $('.pickAnarch').removeClass('bg-danger').removeClass('text-white');
  })
  $('.pickCriminal').click(() => {
    $('.shaperInfo').addClass('d-none');
    $('.criminalInfo').removeClass('d-none');
    $('.anarchInfo').addClass('d-none');
    $('.pickShaper').removeClass('bg-success').removeClass('text-white');
    $('.pickCriminal').addClass('bg-info').addClass('text-white');
    $('.pickAnarch').removeClass('bg-danger').removeClass('text-white');
  })
  $('.pickAnarch').click(() => {
    $('.shaperInfo').addClass('d-none');
    $('.criminalInfo').addClass('d-none');
    $('.anarchInfo').removeClass('d-none');
    $('.pickShaper').removeClass('bg-success').removeClass('text-white');
    $('.pickCriminal').removeClass('bg-info').removeClass('text-white');
    $('.pickAnarch').addClass('bg-danger').addClass('text-white');
  })
})
