import React from "react";
import Alert from "react-bootstrap/Alert";
import "../assets/css/gfonts.css";
import "../assets/css/celebrity_card.css";
import "../assets/css/heading_bar.css";

const VideoDetail = props => {
  const video = props.video;

  if (!video) {
    const videoId = "yBXy5P8IeWE";
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-5 yt-live-container">
                  <iframe
                    className="embed-responsive-item yt-live"
                    src={`https://www.youtube.com/embed/${videoId}`}
                  ></iframe>
                </div>
                <div className="col-md-7">
                  <div className="container pb-1">
                    <h2 className="heading-bar">Celebrities</h2>
                  </div>
                  <div className="celebrities-scroll-box">
                    <div className="image-grid">
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://www.thenews.com.pk//assets/uploads/updates/2020-02-16/614935_2520636_PM-Imran-CPEC_updates.jpg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Imran <span>Khan</span>
                              </h2>
                              <p>Prime Minister of Pakistan</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://humansofpakistan.org/wp-content/uploads/2018/03/ph1.jpg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Pervez <span>Hoodbhoy</span>
                              </h2>
                              <p>Senior Analyst</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://i.ytimg.com/vi/2dD3xmdNuLU/maxresdefault.jpg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Zarrar <span>Khuhro</span>
                              </h2>
                              <p>Executive Producer - Dawn</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://pbs.twimg.com/profile_images/1213553166064766976/imXAQoZE_400x400.jpg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Aliya <span>Nazki</span>
                              </h2>
                              <p>Anchor Person - BBC</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="image-grid">
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://pbs.twimg.com/profile_images/429860093979410432/1f52fqIx_400x400.jpeg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Irfan <span>Husain</span>
                              </h2>
                              <p>Columnist</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://mayday.leftword.com/pub/media/sakshay_author/aijaz-ahmad-big.jpeg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Aijaz Ahmed <span>Mangi</span>
                              </h2>
                              <p>Senior Journalist</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://photo-cdn.urdupoint.com/media/2019/07/_3/730x425/pic_1562782876.jpg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Ahmed Nadeem <span>Qasmi</span>
                              </h2>
                              <p>Senior Journalist</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="grid">
                          <figure className="effect-marley">
                            <img
                              src="https://i.dawn.com/primary/2019/05/5cef38d262cef.jpg"
                              alt="img12"
                            />
                            <figcaption>
                              <h2>
                                Idrees <span>Bakhtiar</span>
                              </h2>
                              <p>Senior Journalist - BBC</p>
                              <a href="#">View more</a>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="container pt-1">
                    <h2 className="heading-bar tb">Closed Captions</h2>
                  </div>
                  <textarea
                    value="ان مذاکرات کی معطلی کی وجہ بظاہر مذاکرات کے دوران کابل میں ایک حملہ بتائی گئی تھی تاہم افغان حکومت نے اس موقع پر کہا تھا کہ وہ دیرپا امن کے لیے پرعزم ہیں۔ انھوں نے امریکی حکومت سے مطالبہ کیا تھا کہ وہ ان کے ساتھ مل کر قیام امن کے لیے کام کریں۔ بعدازاں دسمبر 2019 میں امریکی نمائندہ خصوصی برائے افغان مفاہمتی عمل زلمے خلیل زاد نے قطر میں دوبارہ مذاکرات شروع کیے تھے۔ امریکہ اور افغان طالبان کے درمیان مذاکرات مکمل ہو چکے ہیں اور دونوں جانب سے مذاکرات کامیاب قرار دیے جا چکے ہیں جس کے نتیجے میں امریکہ افغانستان سے بتدریج اپنی فوجیں نکالے گا اور اسے ایک محفوظ راستہ چاہیے ہو گا۔ مبصرین کے مطابق اس معاہدے سے جہاں امریکہ افغانستان میں اپنی طویل جنگ کو اختتام دے سکے گا وہیں افغان حکومت کے لیے اس کے بعد کٹھن فیصلے ہوں گے۔ افغانستان میں انتخابات کے نتائج کا باقاعدہ اعلان کر دیا گیا ہے جن میں اشرف غنی کامیاب رہے۔ اشرف غنی کے مخالف عبداللہ عبداللہ نے ان نتائج کو تسلیم کرنے سے انکار کر دیا ہے اور کہا ہے کہ وہ اپنی حکومت قائم کریں گے۔ مگر کیا طالبان ان انتخابی نتائج کو تسلیم کریں گے؟ اور ایسی کسی بھی صورتحال کے پیدا ہونے سے امریکہ کا کیا رد عمل ہو سکتا ہے؟ صدر اشرف غنی نے چند روز پہلے کہا تھا کہ دوحہ میں امریکہ اور طالبان کے درمیان معاہدہ کامیابی سے ہمکانار ہونا چاہیے۔ پاکستان کے وزیر خارجہ شاہ محمود قریشی نے بھی چند روز پہلے کہا تھا کہ امریکہ اور طالبان کو اس سنہری موقع سے فائدہ اٹھانا چاہیے اور جلد از جلد اس معاہدے کو عملی شکل دینی چاہیے تاکہ خطے ریجن میں امن قائم ہو سکے اور ایسے عناصر کو موقع نہیں ملنا چاہیے جو اس امن کے قیام کی راہ میں رکاوٹ بننا چاہتے ہیں۔ان مذاکرات کی معطلی کی وجہ بظاہر مذاکرات کے دوران کابل میں ایک حملہ بتائی گئی تھی تاہم افغان حکومت نے اس موقع پر کہا تھا کہ وہ دیرپا امن کے لیے پرعزم ہیں۔ انھوں نے امریکی حکومت سے مطالبہ کیا تھا کہ وہ ان کے ساتھ مل کر قیام امن کے لیے کام کریں۔ بعدازاں دسمبر 2019 میں امریکی نمائندہ خصوصی برائے افغان مفاہمتی عمل زلمے خلیل زاد نے قطر میں دوبارہ مذاکرات شروع کیے تھے۔ امریکہ اور افغان طالبان کے درمیان مذاکرات مکمل ہو چکے ہیں اور دونوں جانب سے مذاکرات کامیاب قرار دیے جا چکے ہیں جس کے نتیجے میں امریکہ افغانستان سے بتدریج اپنی فوجیں نکالے گا اور اسے ایک محفوظ راستہ چاہیے ہو گا۔ مبصرین کے مطابق اس معاہدے سے جہاں امریکہ افغانستان میں اپنی طویل جنگ کو اختتام دے سکے گا وہیں افغان حکومت کے لیے اس کے بعد کٹھن فیصلے ہوں گے۔ افغانستان میں انتخابات کے نتائج کا باقاعدہ اعلان کر دیا گیا ہے جن میں اشرف غنی کامیاب رہے۔ اشرف غنی کے مخالف عبداللہ عبداللہ نے ان نتائج کو تسلیم کرنے سے انکار کر دیا ہے اور کہا ہے کہ وہ اپنی حکومت قائم کریں گے۔ مگر کیا طالبان ان انتخابی نتائج کو تسلیم کریں گے؟ اور ایسی کسی بھی صورتحال کے پیدا ہونے سے امریکہ کا کیا رد عمل ہو سکتا ہے؟ صدر اشرف غنی نے چند روز پہلے کہا تھا کہ دوحہ میں امریکہ اور طالبان کے درمیان معاہدہ کامیابی سے ہمکانار ہونا چاہیے۔ پاکستان کے وزیر خارجہ شاہ محمود قریشی نے بھی چند روز پہلے کہا تھا کہ امریکہ اور طالبان کو اس سنہری موقع سے فائدہ اٹھانا چاہیے اور جلد از جلد اس معاہدے کو عملی شکل دینی چاہیے تاکہ خطے ریجن میں امن قائم ہو سکے اور ایسے عناصر کو موقع نہیں ملنا چاہیے جو اس امن کے قیام کی راہ میں رکاوٹ بننا چاہتے ہیں۔"
                    disabled={true}
                    className="textarea"
                    dir="rtl"
                  ></textarea>
                  <div className="container pb-1">
                    <h2 className="heading-bar tb">News Tickers</h2>
                  </div>
                  <marquee
                    behavior="scroll"
                    className="ticker-1"
                    direction="right"
                  >
                    پاکستان پولیس کے سینئر افسر، سپرنٹینڈنٹ پولیس مفخرعدیل بدھ
                    کے روز لاہور کے علاقے جوہر ٹاؤن سے ’لاپتہ‘ ہو گئے ہیں۔ لاہور
                    پولیس کے سربراہ نے کہا ہے کہ پولیس افسر مفخر عدیل اغو نہیں
                    ہوئے ہیں بلکہ وہ ’لاپتہ‘ ہیں۔ تاہم ابھی تک (ایس ایس پی) مفخر
                    عدیل کے لاپتہ ہونے کا مقدمہ درج نہیں گیا۔ پولیس افسر کے
                    لاپتہ ہونے سے متعلق جب بی بی سی نے سی سی پی او لاہور
                    ذوالفقار حمید سے رابطہ کیا تو انھوں نے کہا کہ وہ فی الحال اس
                    کیس پر کوئی رائے نہیں دینا چاہتے۔
                  </marquee>

                  <marquee
                    behavior="scroll"
                    className="ticker-2"
                    direction="right"
                  >
                    پاکستان پولیس کے سینئر افسر، سپرنٹینڈنٹ پولیس مفخرعدیل بدھ
                    کے روز لاہور کے علاقے جوہر ٹاؤن سے ’لاپتہ‘ ہو گئے ہیں۔ لاہور
                    پولیس کے سربراہ نے کہا ہے کہ پولیس افسر مفخر عدیل اغو نہیں
                    ہوئے ہیں بلکہ وہ ’لاپتہ‘ ہیں۔ تاہم ابھی تک (ایس ایس پی) مفخر
                    عدیل کے لاپتہ ہونے کا مقدمہ درج نہیں گیا۔ پولیس افسر کے
                    لاپتہ ہونے سے متعلق جب بی بی سی نے سی سی پی او لاہور
                    ذوالفقار حمید سے رابطہ کیا تو انھوں نے کہا کہ وہ فی الحال اس
                    کیس پر کوئی رائے نہیں دینا چاہتے۔
                  </marquee>

                  <div></div>
                  <marquee
                    behavior="scroll"
                    className="ticker-3"
                    direction="right"
                  >
                    پاکستان پولیس کے سینئر افسر، سپرنٹینڈنٹ پولیس مفخرعدیل بدھ
                    کے روز لاہور کے علاقے جوہر ٹاؤن سے ’لاپتہ‘ ہو گئے ہیں۔ لاہور
                    پولیس کے سربراہ نے کہا ہے کہ پولیس افسر مفخر عدیل اغو نہیں
                    ہوئے ہیں بلکہ وہ ’لاپتہ‘ ہیں۔ تاہم ابھی تک (ایس ایس پی) مفخر
                    عدیل کے لاپتہ ہونے کا مقدمہ درج نہیں گیا۔ پولیس افسر کے
                    لاپتہ ہونے سے متعلق جب بی بی سی نے سی سی پی او لاہور
                    ذوالفقار حمید سے رابطہ کیا تو انھوں نے کہا کہ وہ فی الحال اس
                    کیس پر کوئی رائے نہیں دینا چاہتے۔
                  </marquee>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light stream-trends-container">
                <label className="stream-trends-label">
                  STREAM <span className="font-weight-bold">TRENDS</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="video-detail col-md-8">
          <div className="row"></div>
        </div>
        <div className="col-md-4"></div>
      </React.Fragment>
    );
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
      <div className="captions">
        <Alert variant="success" transition="fade-in">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
        </Alert>
      </div>
      <textarea
        className="textarea-scrollbar scrollbar-outer"
        rows="3"
      ></textarea>
    </div>
  );
};

export default VideoDetail;
