<template>
  <div v-if="openLogin == true || openRegister == true || openLupaPassword == true || openVerifikasi == true" @click="openLogin = false; openRegister = false; openLupaPassword = false; openVerifikasi = false" class="z-30 bg-gray-7 opacity-60 w-screen h-screen absolute top-0" style="backdrop-filter: blur(5px);"></div>
  <div class="w-screen h-screen overflow-x-hidden">
    <div class="flex flex-col text-white w-screen pt-14 pb-10" style="background-image: url('https://i.postimg.cc/RhmmF677/bg-fix-1.jpg'); overflow-x: hidden">
      <section class=" items-end flex flex-col text-xs mt-3 sm:pr-5 sm:mr-3 mb-5 sm:mb-0" >
        <div>{{currentDays}}</div>
        <div>{{currentTime}}:{{currentMinutes}}:{{currentSeconds}}</div>
        <div>{{currentDate}} {{currentMonthName}} {{currentYear}}</div>
      </section>
      <section class=" items-center flex flex-col " >
          <div class=" font-bold text-xl">MONITORING</div>
          <div class=" text-center mt-2">
            <button @click="mediaOpen = !mediaOpen" class="bg-black hover:bg-gray-7 transition-all duration-200 font-semibold px-3.5 py-1 flex items-center">
              <span>Media {{media}}</span>
              <span v-if="mediaOpen" class=" ml-3">
                <svg width="10" height="10" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 0L14.8612 12.75H0.138784L7.5 0Z" fill="white"/>
                </svg>
              </span>
              <span v-else class="ml-3">
                <svg width="10" height="10" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 12L14.8612 0H0.138784L7.5 12Z" fill="white"/>
                </svg>
              </span>
            </button>
            <transition name="fade-data">
              <div v-if="mediaOpen" class=" absolute overflow-hidden z-20">
                <div class=" bg-black opacity-80 z-10 flex flex-col ">
                  <button v-if="media != 1" @click="media = 1; mediaOpen = false" class=" hover:bg-gray-7 transition-all duration-100 my-0.5 w-full h-full px-6">Media 1</button>
                  <button v-if="media != 2" @click="media = 2; mediaOpen = false" class=" hover:bg-gray-7 transition-all duration-100 my-0.5 w-full h-full px-6">Media 2</button>
                  <button v-if="media != 3" @click="media = 3; mediaOpen = false" class=" hover:bg-gray-7 transition-all duration-100 my-0.5 w-full h-full px-6">Media 3</button>
                  <button v-if="media != 4" @click="media = 4; mediaOpen = false" class=" hover:bg-gray-7 transition-all duration-100 my-0.5 w-full h-full px-6">Media 4</button>
                </div>
              </div>
            
            </transition>
          </div>
      </section>
      <section class="w-full flex justify-around flex-col sm:flex-row mt-10" >
          <div class="flex text-center flex-col sm:w-1/3">
            <section class="flex justify-center mb-3">
              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.974 5.89016C29.4534 5.89016 27.995 6.49424 26.9197 7.56951C25.8444 8.64478 25.2404 10.1032 25.2404 11.6238V35.2752H23.3291L24.5053 36.7817C22.78 38.1286 21.5182 39.9806 20.896 42.0791C20.2737 44.1777 20.3221 46.4181 21.0344 48.4878C21.7467 50.5575 23.0872 52.3533 24.8691 53.6245C26.6509 54.8957 28.7852 55.579 30.974 55.579C33.1629 55.579 35.2971 54.8957 37.079 53.6245C38.8608 52.3533 40.2014 50.5575 40.9136 48.4878C41.6259 46.4181 41.6743 44.1777 41.0521 42.0791C40.4299 39.9806 39.1681 38.1286 37.4428 36.7817C36.9789 36.4195 36.7077 35.8637 36.7077 35.2752V11.6238C36.7077 10.1032 36.1036 8.64478 35.0283 7.56951C33.9531 6.49424 32.4947 5.89016 30.974 5.89016ZM21.4179 34.3832V11.6238C21.4179 9.08939 22.4247 6.65875 24.2168 4.86664C26.009 3.07452 28.4396 2.06772 30.974 2.06772C33.5085 2.06772 35.9391 3.07452 37.7312 4.86664C39.5233 6.65875 40.5301 9.08939 40.5301 11.6238V34.3832C42.5069 36.1512 43.9594 38.4379 44.7168 40.9925C45.5653 43.8542 45.4993 46.9093 44.5281 49.7316C43.5568 52.554 41.7287 55.0027 39.2989 56.7362C36.8691 58.4697 33.9588 59.4014 30.974 59.4014C27.9892 59.4014 25.0789 58.4697 22.6491 56.7362C20.2193 55.0027 18.3912 52.554 17.42 49.7316C16.4487 46.9093 16.3827 43.8542 17.2312 40.9925C17.9887 38.4379 19.4412 36.1512 21.4179 34.3832Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.974 42.2034C29.3907 42.2034 28.1072 43.4869 28.1072 45.0702C28.1072 46.6535 29.3907 47.937 30.974 47.937C32.5573 47.937 33.8409 46.6535 33.8409 45.0702C33.8409 43.4869 32.5573 42.2034 30.974 42.2034ZM24.2847 45.0702C24.2847 41.3758 27.2796 38.3809 30.974 38.3809C34.6684 38.3809 37.6633 41.3758 37.6633 45.0702C37.6633 48.7646 34.6684 51.7595 30.974 51.7595C27.2796 51.7595 24.2847 48.7646 24.2847 45.0702Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.974 19.2687C32.0296 19.2687 32.8852 20.1244 32.8852 21.1799V40.2921C32.8852 41.3477 32.0296 42.2034 30.974 42.2034C29.9185 42.2034 29.0628 41.3477 29.0628 40.2921V21.1799C29.0628 20.1244 29.9185 19.2687 30.974 19.2687Z" fill="white"/>
              </svg>
            </section>
            <section class="text-5xl font-bold">
              {{suhuUdara}} °C
            </section>
            <section class=" font-semibold">
              Suhu Udara
            </section>
            <section class=" font-semibold">
              STATUS: 
              <span :class="[statusSuhuUdara =='NORMAL' ? 'text-green' : 'text-red']" >{{statusSuhuUdara}}</span> 
            </section>
          </div>
        <div class="flex sm:relative flex-row justify-around mt-7 sm:mt-0 sm:w-2/3">
          <div class="flex text-center flex-col">
            <section class="flex justify-center mb-3">
              <svg width="59" height="57" viewBox="0 0 59 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5573 2.10324L29.5 3.5625L28.4427 2.10324C29.0775 1.67392 29.9225 1.67392 30.5573 2.10324ZM29.5 5.78906C29.0506 6.12775 28.4765 6.57376 27.8132 7.11843C26.1361 8.4957 23.902 10.4927 21.6726 12.9696C17.1687 17.9734 12.9062 24.6882 12.9062 32.0625C12.9062 36.3143 14.6545 40.3919 17.7664 43.3983C20.8784 46.4047 25.0991 48.0938 29.5 48.0938C33.9009 48.0938 38.1216 46.4047 41.2336 43.3983C44.3455 40.3919 46.0938 36.3143 46.0938 32.0625C46.0938 24.6882 41.8313 17.9734 37.3274 12.9696C35.098 10.4927 32.8639 8.4957 31.1868 7.11843C30.5235 6.57376 29.9494 6.12775 29.5 5.78906ZM28.4427 2.10324C28.4433 2.10285 28.4427 2.10324 29.5 3.5625C30.5573 2.10324 30.5567 2.10285 30.5573 2.10324L30.5599 2.10502L30.5643 2.10795L30.5779 2.11724L30.6248 2.14945C30.6646 2.17696 30.7215 2.21648 30.7942 2.26775C30.9395 2.37028 31.1485 2.51987 31.4118 2.71434C31.9384 3.10315 32.6837 3.67217 33.575 4.40403C35.3548 5.86563 37.7301 7.98777 40.1101 10.632C44.825 15.8703 49.7812 23.4055 49.7812 32.0625C49.7812 37.2591 47.6445 42.2428 43.841 45.9174C40.0375 49.5919 34.8789 51.6562 29.5 51.6562C24.1211 51.6562 18.9625 49.5919 15.159 45.9174C11.3555 42.2428 9.21875 37.2591 9.21875 32.0625C9.21875 23.4055 14.175 15.8703 18.8899 10.632C21.2699 7.98777 23.6452 5.86563 25.425 4.40403C26.3163 3.67217 27.0616 3.10315 27.5882 2.71434C27.8515 2.51987 28.0605 2.37028 28.2058 2.26775C28.2785 2.21648 28.3354 2.17696 28.3752 2.14945L28.4221 2.11724L28.4357 2.10795L28.4401 2.10502L28.4427 2.10324Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.7137 32.1108C41.7172 32.2777 42.3907 33.1989 42.2179 34.1684C41.7654 36.708 40.5082 39.0492 38.6197 40.8691C36.7311 42.6889 34.3045 43.8976 31.6747 44.3283C30.6707 44.4927 29.7189 43.8397 29.5487 42.8698C29.3785 41.8999 30.0544 40.9803 31.0584 40.8159C32.9355 40.5085 34.6676 39.6457 36.0155 38.3468C37.3635 37.0478 38.2609 35.3767 38.5839 33.564C38.7567 32.5945 39.7102 31.9439 40.7137 32.1108Z" fill="white"/>
              </svg>
            </section>
            <section class="text-5xl font-bold">
              {{kelembapanUdara}} %
            </section>
            <section class=" font-semibold">
              Kelembapan Udara
            </section>
            <section class=" font-semibold">
              STATUS: 
              <span :class="[statusKelembapanUdara =='NORMAL' ? 'text-green' : 'text-red']" >{{statusKelembapanUdara}}</span> 
            </section>
          </div>
          <div class="flex text-center flex-col">
            <section class="flex justify-center mb-3">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27 16.0312C20.9421 16.0312 16.0312 20.9421 16.0312 27C16.0312 33.0579 20.9421 37.9688 27 37.9688C33.0579 37.9688 37.9688 33.0579 37.9688 27C37.9688 20.9421 33.0579 16.0312 27 16.0312ZM12.6562 27C12.6562 19.0782 19.0782 12.6562 27 12.6562C34.9218 12.6562 41.3438 19.0782 41.3438 27C41.3438 34.9218 34.9218 41.3438 27 41.3438C19.0782 41.3438 12.6562 34.9218 12.6562 27Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27 1.6875C27.932 1.6875 28.6875 2.44302 28.6875 3.375V7.59375C28.6875 8.52573 27.932 9.28125 27 9.28125C26.068 9.28125 25.3125 8.52573 25.3125 7.59375V3.375C25.3125 2.44302 26.068 1.6875 27 1.6875Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.10067 9.10067C9.75968 8.44166 10.8281 8.44166 11.4872 9.10067L14.4614 12.0749C15.1204 12.7339 15.1204 13.8024 14.4614 14.4614C13.8024 15.1204 12.7339 15.1204 12.0749 14.4614L9.10067 11.4872C8.44166 10.8281 8.44166 9.75968 9.10067 9.10067Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6875 27C1.6875 26.068 2.44302 25.3125 3.375 25.3125H7.59375C8.52573 25.3125 9.28125 26.068 9.28125 27C9.28125 27.932 8.52573 28.6875 7.59375 28.6875H3.375C2.44302 28.6875 1.6875 27.932 1.6875 27Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4614 39.5387C15.1204 40.1977 15.1204 41.2662 14.4614 41.9252L11.4872 44.8994C10.8281 45.5584 9.75968 45.5584 9.10067 44.8994C8.44166 44.2404 8.44166 43.1719 9.10067 42.5129L12.0749 39.5387C12.7339 38.8797 13.8024 38.8797 14.4614 39.5387Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27 44.7188C27.932 44.7188 28.6875 45.4743 28.6875 46.4062V50.625C28.6875 51.557 27.932 52.3125 27 52.3125C26.068 52.3125 25.3125 51.557 25.3125 50.625V46.4062C25.3125 45.4743 26.068 44.7188 27 44.7188Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5391 39.5387C40.1981 38.8797 41.2666 38.8797 41.9256 39.5387L44.8998 42.5129C45.5588 43.1719 45.5588 44.2404 44.8998 44.8994C44.2408 45.5584 43.1723 45.5584 42.5133 44.8994L39.5391 41.9252C38.8801 41.2662 38.8801 40.1977 39.5391 39.5387Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7188 27C44.7188 26.068 45.4743 25.3125 46.4062 25.3125H50.625C51.557 25.3125 52.3125 26.068 52.3125 27C52.3125 27.932 51.557 28.6875 50.625 28.6875H46.4062C45.4743 28.6875 44.7188 27.932 44.7188 27Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.8998 9.10067C45.5588 9.75968 45.5588 10.8281 44.8998 11.4872L41.9256 14.4614C41.2666 15.1204 40.1981 15.1204 39.5391 14.4614C38.8801 13.8024 38.8801 12.7339 39.5391 12.0749L42.5133 9.10067C43.1723 8.44166 44.2408 8.44166 44.8998 9.10067Z" fill="white"/>
              </svg>
            </section>
            <section class="text-5xl font-bold">
              {{cahaya}}
            </section>
            <section class=" font-semibold">
              Cahaya
            </section>
            <section class=" font-semibold">
              STATUS: 
              <span :class="[statusCahaya =='NORMAL' ? 'text-green' : 'text-red']" >{{statusCahaya}}</span> 
            </section>
          </div>
        </div>
      </section>
    </div>
    <div class=" bg-white flex flex-col-reverse sm:flex-row w-full overflow-x-hidden">
      <div class=" w-full sm:w-1/2 flex items-center justify-center py-7">
        <div class=" border-2 overflow-x-hidden w-auto sm:w-5/6 h-full" >
          <div v-if="isLoggedIn == false" class="w-full h-full bg-gray-1 flex flex-col justify-center items-center">
            <section class=" font-bold text-2xl mb-1">Live Youtube</section>
            <section>masuk untuk menonton livestream</section>
            <button @click="openLogin = true"  class=" bg-light-green border px-10 py-2 rounded-2xl text-lg hover:bg-dark-green mt-8 transition-colors duration-200">
              <span>MASUK</span>
            </button>
          </div>
          <div v-else-if="isLoggedIn == true && isVerified == false" class="w-full h-full bg-gray-1 flex flex-col justify-center items-center">
            <section class=" font-bold text-2xl mb-1">Live Youtube</section>
            <section>verifikasi email anda untuk menonton livestream</section>
            <button @click="openVerifikasi = true"  class=" bg-light-green border px-10 py-2 rounded-2xl text-lg hover:bg-dark-green mt-8 transition-colors duration-200">
              <span>VERIFIKASI EMAIL</span>
            </button>
          </div>
          <iframe v-else class="w-full h-full" src="https://www.youtube.com/embed/Za5-fvwbPJI?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
      <div class="w-full border-b-2 sm:border-b-0 sm:w-1/2 flex sm:border-l-2 border-gray-7">
        <section class=" w-1/2 flex flex-col border-r-2 border-gray-7">
          <div class=" h-1/2 flex flex-col justify-between border-b-2 border-gray-7 py-2 px-3">
            <p style="font-size: 1.2vw;">TDS rata-rata</p>
            <div class=" flex flex-row items-center justify-center">
              <span class=" font-bold mr-2" >299</span> 
              <span class=" self-end pb-3 font-semibold">LPM</span>
            </div>
            <div class="text-center font-semibold">
              STATUS: RENDAH
            </div>
          </div>
          <div class=" h-1/2 flex flex-col justify-between border-b-0 border-gray-7 py-2 px-3">
            <p style="font-size: 1.4vw;">Flowmeter rata-rata</p>
            <div class=" flex flex-row items-center justify-center">
              <span class=" font-bold mr-2" style="font-size: 4.5vw;">{{flowratarata}}</span> 
              <span class=" self-end pb-3 font-semibold">LPM</span>
            </div>
            <div class="text-center font-semibold">
              STATUS: 
              <span :class="[statusFlow =='NORMAL' ? 'text-green' : 'text-red']">{{statusFlow}}</span>
            </div>
          </div>
        </section>
        <section class=" w-1/2 h-full flex justify-center items-center">
          <div class=" flex h-2/3 flex-col justify-between border-b-0 border-gray-7 py-2 px-3">
            <p style="font-size: 1.4vw;">Suhu air rata-rata</p>
            <div class=" flex flex-row items-center justify-center">
              <span class=" font-bold mr-2" style="font-size: 5.5vw;">35</span> 
              <span class=" self-end pb-3 font-semibold text-xl">°C</span>
            </div>
            <div class="text-center font-semibold">
              STATUS: 
              <span>NORMAL</span>
            </div>
          </div>
        </section>
      </div>
    </div>
    <login @open-lupapassword="openLupaPassword = true; openLogin = false" @open-register="openRegister = true; openLogin = false" @close-login="openLogin = false" v-if="openLogin == true" />
    <register @close-register="openRegister = false" @open-login="openRegister = false; openLogin = true" v-if="openRegister == true"/>
    <Verifikasi @close-verifikasi="openVerifikasi = false" v-if="openVerifikasi == true"/>
    <lupapassword v-if="openLupaPassword == true" @close-lupapassword="openLupaPassword = false" />
  </div>
</template>

<script>
import login from '../components/login.vue'
import register from '../components/register.vue'
import lupapassword from '../components/lupapassword.vue'
import Verifikasi from '../components/verifikasi.vue'
import {ref} from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { media1_suhuUdara, media1_kelembapanUdara, media1_cahaya, media2_suhuUdara, media2_kelembapanUdara, media2_cahaya, media3_suhuUdara, media3_kelembapanUdara, media3_cahaya, media4_suhuUdara, media4_kelembapanUdara, media4_cahaya, media1_flow, media2_flow, media3_flow, media4_flow  } from '../utilities/firebase'
export default {
components:{login, register, lupapassword, Verifikasi},
setup(){
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    const mediaOpen = ref(false);
    const media =  ref(1);

    let suhuUdara = ref();
    let kelembapanUdara = ref();
    let cahaya = ref();
    let flow1 = ref();
    let flow2 = ref();
    let flow3 = ref();
    let flow4 = ref();
    let flowratarata = ref();

    let statusSuhuUdara = ref();
    let statusKelembapanUdara = ref();
    let statusCahaya = ref();
    let statusFlow = ref();

    let currentDate = ref();
    let currentMonth = ref();
    let currentYear = ref(); 
    let currentTime = ref();
    let currentMinutes = ref();
    let currentSeconds = ref();
    let currentMonthName = ref();
    let currentDays = ref();

    setInterval(() => {
      currentYear.value = new Date().getFullYear();
      currentMonth.value = new Date().getMonth()+1;
      currentDate.value = new Date().getDate().toString().padStart(2, "0");
      currentTime.value = new Date().getHours().toString().padStart(2, "0");
      currentMinutes.value = new Date().getMinutes().toString().padStart(2, "0");
      currentSeconds.value = new Date().getSeconds().toString().padStart(2, "0");
      currentMonthName.value = monthNames[new Date().getMonth()];
      currentDays.value = days[new Date().getDay().toLocaleString()];
    })

    setInterval(async() => {
      if (media.value == 1) {
        let productDataSet = await media1_suhuUdara.once("value");
        suhuUdara.value = productDataSet.val();

        let productDataSet1 = await media1_kelembapanUdara.once("value");
        kelembapanUdara.value = productDataSet1.val();

        let productDataSet2 = await media1_cahaya.once("value");
        cahaya.value = productDataSet2.val();
      }
      else if (media.value == 2) {
        let productDataSet = await media2_suhuUdara.once("value");
        suhuUdara.value = productDataSet.val();

        let productDataSet1 = await media2_kelembapanUdara.once("value");
        kelembapanUdara.value = productDataSet1.val();

        let productDataSet2 = await media2_cahaya.once("value");
        cahaya.value = productDataSet2.val();
      }
      else if (media.value == 3) {
        let productDataSet = await media3_suhuUdara.once("value");
        suhuUdara.value = productDataSet.val();

        let productDataSet1 = await media3_kelembapanUdara.once("value");
        kelembapanUdara.value = productDataSet1.val();

        let productDataSet2 = await media3_cahaya.once("value");
        cahaya.value = productDataSet2.val();
      }
      else if (media.value == 4) {
        let productDataSet = await media4_suhuUdara.once("value");
        suhuUdara.value = productDataSet.val();

        let productDataSet1 = await media4_kelembapanUdara.once("value");
        kelembapanUdara.value = productDataSet1.val();

        let productDataSet2 = await media4_cahaya.once("value");
        cahaya.value = productDataSet2.val();
      }
      
        let productDataSet5 = await media1_flow.once("value");
        flow1.value = productDataSet5.val();

        let productDataSet6 = await media2_flow.once("value");
        flow2.value = productDataSet6.val();

        let productDataSet7 = await media3_flow.once("value");
        flow3.value = productDataSet7.val();

        let productDataSet8 = await media4_flow.once("value");
        flow4.value = productDataSet8.val();

        flowratarata.value = (flow1.value + flow2.value + flow3.value + flow4.value) /4
        //console.log(flowratarata.value);
      ///
      if (suhuUdara.value <= 10) {
        statusSuhuUdara.value = 'RENDAH';
      }
      else if (suhuUdara.value > 10 && suhuUdara.value <= 30) {
        statusSuhuUdara.value = 'NORMAL';
      }
      else if (suhuUdara.value > 30) {
        statusSuhuUdara.value = 'TINGGI';
      }


      if (kelembapanUdara.value <= 70) {
        statusKelembapanUdara.value = 'RENDAH';
      }
      else if (kelembapanUdara.value > 70 && kelembapanUdara.value <= 90) {
        statusKelembapanUdara.value = 'NORMAL';
      }
      else if (kelembapanUdara.value > 90) {
        statusKelembapanUdara.value = 'TINGGI';
      }

      if (cahaya.value <= 200) {
        statusCahaya.value = 'RENDAH';
      }
      else if (cahaya.value > 200 && cahaya.value <= 270) {
        statusCahaya.value = 'NORMAL';
      }
      else if (cahaya.value > 270) {
        statusCahaya.value = 'TINGGI';
      }

      if (flowratarata.value <= 70) {
        statusFlow.value = 'RENDAH';
      }
      else if (flowratarata.value > 70 && flowratarata.value <= 110) {
        statusFlow.value = 'NORMAL';
      }
      else if (flowratarata.value > 110) {
        statusFlow.value = 'TINGGI';
      }
    },500)

    return{ currentDate, currentTime, currentMinutes, currentSeconds, currentMonth, currentYear, monthNames, currentMonthName, days, currentDays, mediaOpen, media, statusSuhuUdara, suhuUdara, kelembapanUdara, statusKelembapanUdara, cahaya, statusCahaya, flow1, flow2, flow3, flow4, flowratarata, statusFlow}
  },
  data(){
  return{
    openLogin: false,
    openRegister: false,
    openLupaPassword:false,
    openVerifikasi:false,
    isLoggedIn:"",
    isVerified: false,

  }
},
mounted(){
  const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //const uid = user.uid;
          //console.log(uid);
          //console.log(user.displayName);
          //console.log(user.emailVerified);
          this.isLoggedIn = true;
          if(user.emailVerified == true){
            this.isVerified = true;
            //alert('email telah diverifikasi');
            //this.openLogin = true;
          }
          // ...
      } else {
          // User is signed out
          // ...
          console.log('no user');
          this.isLoggedIn = false;
      }
      });   
},
}
</script>

<style>
.fade-data-enter-active,
.fade-data-leave-active {
  transition: opacity 0.5s ease;
}

.fade-data-enter-from,
.fade-data-leave-to {
  opacity: 0;
}

</style>