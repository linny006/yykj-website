import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/1.png"
              alt="盈养科技 Logo"
              width={40} // 您可以根据logo的实际尺寸调整
              height={40} // 您可以根据logo的实际尺寸调整
              className="h-10 w-auto" // 保持高度为10，宽度自动，或根据需要调整
            />
            <span className="text-2xl font-bold text-green-600">
              盈养科技
            </span>
          </div>
          <div className="space-x-4">
            <a href="#hero" className="text-gray-600 hover:text-green-600 transition-colors">首页</a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">关于我们</a>
            <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">产品与服务</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">联系我们</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            科技赋能健康，<br className="md:hidden" />引领生活新方式
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            盈养科技致力于通过创新科技，为您提供个性化的健康解决方案，开启健康生活新篇章。
          </p>
          <a
            href="#services"
            className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            了解更多
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            关于盈养科技
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <Image
                src="/company-image.jpg"
                alt="盈养科技公司形象"
                width={600} // 您可以根据图片的实际宽高比和设计需求调整
                height={400} // 您可以根据图片的实际宽高比和设计需求调整
                className="rounded-lg shadow-lg object-cover w-full h-auto md:h-80"
                priority // 如果图片在首屏，建议添加 priority
              />
            </div>
            <div className="md:w-1/2 text-lg text-gray-700 space-y-4">
              <p>
                盈养科技是一家专注于健康科技领域的创新型企业。我们坚信科技的力量能够改善人们的生活质量，特别是通过提供精准、便捷的健康管理工具和服务。
              </p>
              <p>
                我们的团队由一群充满激情和经验丰富的科学家、工程师和健康专家组成，致力于研发前沿的健康技术，帮助用户更好地了解自己的身体，做出更明智的健康决策。
              </p>
              <p>
                我们的愿景是成为全球领先的健康科技公司，通过持续创新，为社会创造更大的健康价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            我们的产品与服务
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-green-500 mb-4">
                {/* Placeholder for an icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">个性化营养计划</h3>
              <p className="text-gray-600 text-center">
                基于您的检测数据和生活习惯，为您量身定制科学的营养补充方案。
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-green-500 mb-4">
                {/* Placeholder for an icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">智能健康监测</h3>
              <p className="text-gray-600 text-center">
                通过可穿戴设备和App，实时追踪您的健康数据，提供专业的健康分析和预警。
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-green-500 mb-4">
                {/* Placeholder for an icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">在线健康咨询</h3>
              <p className="text-gray-600 text-center">
                随时随地与我们的专业健康顾问沟通，获取个性化的健康指导和建议。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            联系我们
          </h2>
          <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors" placeholder="请输入您的姓名" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">邮箱</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors" placeholder="请输入您的邮箱" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">留言</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors" placeholder="请输入您的留言"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} 盈养科技. 保留所有权利.</p>
          <p className="text-sm">
            <Link href="/privacy-policy" className="hover:text-green-400 transition-colors">隐私政策</Link> | <Link href="/terms-of-service" className="hover:text-green-400 transition-colors">服务条款</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
