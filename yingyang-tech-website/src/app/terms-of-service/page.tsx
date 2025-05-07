import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 py-12 min-h-screen font-[family-name:var(--font-geist-sans)] text-gray-800">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-green-600">服务条款</h1>
      </header>
      <main className="prose prose-lg max-w-none">
        <p className="mb-4">生效日期：{new Date().toLocaleDateString('zh-CN')}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">引言</h2>
        <p>
          欢迎使用盈养科技（以下简称“我们”或“本公司”）提供的产品和服务。这些服务条款（以下简称“本条款”）适用于您对我们网站、应用程序及相关服务（以下统称“服务”）的访问和使用。
        </p>
        <p>在访问或使用我们的服务前，请您务必仔细阅读并透彻理解本条款。您访问或使用我们的服务，即表示您已阅读、理解并同意接受本条款的所有内容。如果您不同意本条款的任何内容，请立即停止使用我们的服务。</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">服务内容</h2>
        <p>
          我们提供的服务包括但不限于[请在此处列举主要服务内容，例如：个性化健康数据分析、营养计划建议、在线健康咨询等]。我们保留随时修改、暂停或终止部分或全部服务的权利，恕不另行通知。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">用户行为规范</h2>
        <p>您在使用我们的服务时，必须遵守所有适用的法律法规，并同意不进行以下任何活动：</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>违反任何法律法规或侵犯任何第三方权利的行为；</li>
          <li>发布、传送、传播、储存违反国家法律、危害国家安全统一、社会稳定、公序良俗、社会公德以及任何不当、侮辱、诽谤、淫秽、暴力或引起他人不安的内容；</li>
          <li>对我们的服务进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本服务的源代码；</li>
          <li>利用本服务从事任何可能对互联网的正常运转造成不利影响的行为；</li>
          <li>其他任何非法或我们认为不适当的行为。</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">知识产权</h2>
        <p>
          我们的服务及其所有内容，包括但不限于文本、图形、图像、标识、按钮图标、软件和音频剪辑（以下统称“内容”），均为本公司或其内容供应者的财产，受中国及国际版权法、商标法和其他知识产权法律的保护。
        </p>
        <p>未经我们或相关权利人事先书面同意，您不得以任何方式复制、修改、传播、展示、分发或以其他方式使用我们的任何内容。</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">免责声明</h2>
        <p>
          您明确同意自担风险使用我们的服务。我们的服务按“现状”和“现有”基础提供。在适用法律允许的最大范围内，我们明确否认所有类型的保证，无论是明示的还是默示的，包括但不限于适销性、特定用途适用性和不侵权的默示保证。
        </p>
        <p>我们不保证服务将满足您的要求，或者服务将是不间断的、及时的、安全的或无错误的；也不保证通过服务获得的结果将是准确或可靠的。</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">条款变更</h2>
        <p>
          我们保留随时修改本条款的权利。所有修改将公布在我们的网站上，并自公布之日起生效。我们鼓励您定期查看本条款，以确保您了解任何变更。您在条款修改后继续使用我们的服务，即表示您接受修改后的条款。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">联系我们</h2>
        <p>
          如果您对本服务条款有任何疑问，请通过[请在此处插入联系方式]与我们联系。
        </p>

        <div className="mt-12 text-center">
          <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">
            返回首页
          </Link>
        </div>
      </main>
      <footer className="mt-16 py-8 border-t border-gray-200 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} 盈养科技. 保留所有权利.</p>
      </footer>
    </div>
  );
}
